from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.db import engine, Base, get_db
from app import crud, schemas

app = FastAPI()

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.post("/users/", response_model=schemas.UserRead)
async def create_user(user: schemas.UserCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_user(db, user)

@app.get("/users/", response_model=List[schemas.UserRead])
async def list_users(db: AsyncSession = Depends(get_db)):
    return await crud.get_users(db)
