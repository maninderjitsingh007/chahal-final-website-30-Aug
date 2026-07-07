from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Chahal Ayurvedic Clinic API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    problem: str
    preferred_date: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class AppointmentCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=6, max_length=20)
    problem: str = Field(..., min_length=2, max_length=200)
    preferred_date: Optional[str] = None
    message: Optional[str] = Field(None, max_length=1000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: Optional[str] = None
    email: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)
    email: Optional[str] = Field(None, max_length=120)
    message: str = Field(..., min_length=2, max_length=2000)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Chahal Ayurvedic Clinic API is running"}


@api_router.get("/clinic-info")
async def clinic_info():
    return {
        "name": "Chahal Ayurvedic Clinic",
        "doctor": "Dr. Rajgurbir Singh Chahal",
        "qualification": "BAMS",
        "address": "H.No. 258, Crossing Street No. 2, Guru Teg Bahadur Colony, Bus Stand to College Road, Malerkotla-148023, Punjab",
        "phone": "+91 94172-58159",
        "whatsapp": "+919417258159",
        "tagline_pa": "ਹਰ ਬਿਮਾਰੀ ਦਾ ਕੁਦਰਤੀ ਇਲਾਜ",
        "tagline_en": "Natural Cure for Every Disease",
    }


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate):
    appt = Appointment(**payload.model_dump())
    doc = appt.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.appointments.insert_one(doc)
    return appt


@api_router.get("/appointments", response_model=List[Appointment])
async def list_appointments(limit: int = 100):
    docs = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            try:
                d['created_at'] = datetime.fromisoformat(d['created_at'])
            except Exception:
                d['created_at'] = datetime.now(timezone.utc)
    return docs


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    if not payload.phone and not payload.email:
        raise HTTPException(status_code=400, detail="Provide phone or email")
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
