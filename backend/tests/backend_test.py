"""Backend regression tests for Chahal Ayurvedic Clinic API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://chahal-wellness.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- /api/clinic-info ----------
class TestClinicInfo:
    def test_clinic_info_returns_both_phones_and_whatsapps(self, client):
        r = client.get(f"{API}/clinic-info", timeout=15)
        assert r.status_code == 200
        data = r.json()
        # Both phone fields
        assert "phone" in data and "phone2" in data
        assert "whatsapp" in data and "whatsapp2" in data
        # Value assertions - must contain expected number fragments
        assert "94172" in data["phone"] and "58159" in data["phone"]
        assert "99149" in data["phone2"] and "58159" in data["phone2"]
        assert "9417258159" in data["whatsapp"]
        assert "9914958159" in data["whatsapp2"]
        # Email field
        assert data.get("email") == "chahal2006@yahoo.co.in"
        # Other required fields still present
        for k in ("name", "doctor", "qualification", "address", "tagline_en", "tagline_pa"):
            assert k in data


# ---------- /api/appointments ----------
class TestAppointments:
    def test_create_appointment_leucorrhea_persists(self, client):
        payload = {
            "name": "TEST User Leuco",
            "phone": "9876543210",
            "problem": "Leucorrhea / White Discharge",
            "preferred_date": "2026-02-15",
            "message": "TEST created by backend_test",
        }
        r = client.post(f"{API}/appointments", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["problem"] == payload["problem"]
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0

        # verify persistence via GET
        r2 = client.get(f"{API}/appointments?limit=100", timeout=15)
        assert r2.status_code == 200
        found = [a for a in r2.json() if a.get("id") == data["id"]]
        assert len(found) == 1
        assert found[0]["problem"] == "Leucorrhea / White Discharge"

    def test_create_appointment_minimal(self, client):
        payload = {"name": "TEST Min", "phone": "9876500001", "problem": "PCOD & Hormonal Care"}
        r = client.post(f"{API}/appointments", json=payload, timeout=15)
        assert r.status_code == 200
        d = r.json()
        assert d["problem"] == "PCOD & Hormonal Care"
        assert d["preferred_date"] is None
        assert d["message"] is None

    def test_create_appointment_validation(self, client):
        # missing phone -> 422
        r = client.post(f"{API}/appointments", json={"name": "TEST", "problem": "X"}, timeout=15)
        assert r.status_code == 422

    def test_list_appointments(self, client):
        r = client.get(f"{API}/appointments", timeout=15)
        assert r.status_code == 200
        assert isinstance(r.json(), list)


# ---------- /api/contact ----------
class TestContact:
    def test_contact_requires_phone_or_email(self, client):
        r = client.post(f"{API}/contact", json={"name": "TEST", "message": "hello world"}, timeout=15)
        assert r.status_code == 400

    def test_contact_create_ok(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "TEST Contact", "phone": "9876543211", "message": "TEST message body"},
            timeout=15,
        )
        assert r.status_code == 200
        d = r.json()
        assert d["name"] == "TEST Contact"
        assert isinstance(d.get("id"), str)


# ---------- root ----------
class TestRoot:
    def test_root(self, client):
        r = client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        assert "running" in r.json().get("message", "").lower()
