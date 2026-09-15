# AI Study Assistant

A modern student-focused study assistant built with **HTML, CSS, JavaScript, Flask and MySQL**.

## Features
- Student registration and login
- Secure password hashing
- JWT authentication
- Protected study chat API
- Simple explanations for Python, HTML, CSS, JavaScript, SQL and cybersecurity
- MySQL user and chat-history schema
- Responsive dark/blue student-friendly interface
- Environment variables for configuration

## Project structure
```text
AI-Study-Assistant/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── style.css
│   └── app.js
├── database/
│   └── schema.sql
├── app.py
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```

## Run locally
1. Install Python 3.10+ and MySQL.
2. Create the database by running `database/schema.sql` in MySQL.
3. Create a virtual environment and install dependencies with `pip install -r requirements.txt`.
4. Copy `.env.example` to `.env` and set your MySQL password and a strong JWT secret.
5. Start the server with `python app.py`.
6. Open `http://localhost:5000`.

The current chatbot uses a built-in study response engine. An external AI provider can be integrated later through a server-side API key stored only in `.env` or deployment secrets.

## Security notes
Never commit `.env`, passwords, API keys, JWT secrets or other credentials to GitHub. Use `.env.example` only as a configuration template.
