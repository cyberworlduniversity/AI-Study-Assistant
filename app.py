import os
from datetime import datetime, timedelta, timezone
from functools import wraps

import jwt
import mysql.connector
from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash

load_dotenv()

app = Flask(__name__, static_folder="frontend", static_url_path="")
CORS(app)

JWT_SECRET = os.getenv("JWT_SECRET", "change-this-development-secret")
JWT_EXPIRY_HOURS = int(os.getenv("JWT_EXPIRY_HOURS", "2"))


def db_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=int(os.getenv("DB_PORT", "3306")),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD", ""),
        database=os.getenv("DB_NAME", "ai_study_assistant"),
    )


def create_token(user_id, email):
    now = datetime.now(timezone.utc)
    return jwt.encode(
        {"sub": str(user_id), "email": email, "iat": now, "exp": now + timedelta(hours=JWT_EXPIRY_HOURS)},
        JWT_SECRET,
        algorithm="HS256",
    )


def token_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        header = request.headers.get("Authorization", "")
        if not header.startswith("Bearer "):
            return jsonify({"error": "Authentication token required"}), 401
        try:
            payload = jwt.decode(header.split(" ", 1)[1].strip(), JWT_SECRET, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401
        return fn(payload, *args, **kwargs)
    return wrapper


def study_answer(message):
    lower = message.lower()
    answers = {
        "python": "Python is a high-level language used for automation, web development, data science, AI and cybersecurity. Start with variables, conditions, loops, functions and modules.",
        "html": "HTML provides the structure of a web page. Learn semantic elements, links, images, forms, tables and accessibility basics.",
        "css": "CSS controls the presentation of web pages, including layout, spacing, typography, responsive design, transitions and animations.",
        "javascript": "JavaScript adds behavior to web pages. Learn variables, functions, arrays, objects, DOM manipulation, events and asynchronous programming.",
        "sql": "SQL is used to store, retrieve and manage relational data. Begin with SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, GROUP BY and indexes.",
        "cybersecurity": "Cybersecurity protects systems, networks and data from unauthorized access and attacks. Important foundations include authentication, access control, secure coding, networking and incident response.",
    }
    for keyword, answer in answers.items():
        if keyword in lower or (keyword == "javascript" and "js" in lower):
            return answer
    return "I’m your AI Study Assistant. Ask me about programming, web development, databases, AI or cybersecurity, and I’ll explain the topic in simple steps."


@app.get("/")
def home():
    return send_from_directory(app.static_folder, "index.html")


@app.post("/api/auth/register")
def register():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))
    if not name or "@" not in email or len(password) < 8:
        return jsonify({"error": "Enter a valid name, email and password of at least 8 characters"}), 400
    conn = db_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({"error": "Email is already registered"}), 409
        cursor.execute("INSERT INTO users (name, email, password_hash) VALUES (%s, %s, %s)", (name, email, generate_password_hash(password)))
        conn.commit()
        user_id = cursor.lastrowid
        return jsonify({"message": "Registration successful", "token": create_token(user_id, email), "user": {"id": user_id, "name": name, "email": email}}), 201
    finally:
        cursor.close(); conn.close()


@app.post("/api/auth/login")
def login():
    data = request.get_json(silent=True) or {}
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    conn = db_connection(); cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id, name, email, password_hash FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
        if not user or not check_password_hash(user["password_hash"], password):
            return jsonify({"error": "Invalid email or password"}), 401
        return jsonify({"message": "Login successful", "token": create_token(user["id"], user["email"]), "user": {"id": user["id"], "name": user["name"], "email": user["email"]}})
    finally:
        cursor.close(); conn.close()


@app.get("/api/me")
@token_required
def me(payload):
    conn = db_connection(); cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id, name, email, created_at FROM users WHERE id = %s", (payload["sub"],))
        user = cursor.fetchone()
        if not user:
            return jsonify({"error": "User not found"}), 404
        user["created_at"] = user["created_at"].isoformat() if user["created_at"] else None
        return jsonify({"user": user})
    finally:
        cursor.close(); conn.close()


@app.post("/api/chat")
@token_required
def chat(payload):
    data = request.get_json(silent=True) or {}
    message = str(data.get("message", "")).strip()
    if not message or len(message) > 2000:
        return jsonify({"error": "Message is required and must be under 2000 characters"}), 400
    return jsonify({"answer": study_answer(message), "user_id": payload["sub"]})


@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "AI Study Assistant"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")), debug=os.getenv("FLASK_DEBUG", "0") == "1")
