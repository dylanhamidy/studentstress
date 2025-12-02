import os
from dotenv import load_dotenv

load_dotenv()

class Envs:
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    
envs = Envs()