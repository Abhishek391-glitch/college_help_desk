# College Help Desk Agent

Single-page college help desk with a React frontend and a Node/Express RAG backend.

## Run backend

1. Copy `backend/.env.example` to `backend/.env` and set `GOOGLE_API_KEY`.
2. `cd backend && npm install && npm run dev`

Chat endpoint: `POST http://localhost:5000/api/chat`

```json
{ "message": "What is the placement package?" }
```

## Run frontend

Frontend screens are stubs only. UI work is the next step.

`cd frontend && npm install && npm run dev`
