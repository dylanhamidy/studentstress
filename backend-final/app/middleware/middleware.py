from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

def setup_middleware(app: FastAPI):
    """
    Configure all middleware for the FastAPI application.
    """
    
    #CORS Middleware to connect to frontend
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost:5173",  # React dev server
            "http://localhost:8000",  # FastAPI docs
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )