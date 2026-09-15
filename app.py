from flask import Flask

app = Flask(__name__)

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "AI Study Assistant"}

if __name__ == "__main__":
    app.run(debug=True)
