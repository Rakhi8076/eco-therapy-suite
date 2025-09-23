import React, { useState } from "react";
import { MapPin, Star, Clock, Phone, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation

const clinics = [
  {
    id: 1,
    name: "Manav Ayurvedic Centre",
    rating: 4.8,
    reviews: 245,
    image: "/banner 1.jpeg",
    address: "Sector 17, Chandigarh",
    timing: "9:00 AM - 7:00 PM",
    phone: "+91 98765 43210",
    available: "Today",
    distance: 2.3,
    tags: ["Panchakarma", "Skin Care", "Weight Management"],
    timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    name: "Ayurveda the Science Life",
    rating: 4.6,
    reviews: 156,
    image: "banner1.jpeg",
    address: "Sector 22, Chandigarh",
    timing: "10:00 AM - 6:00 PM",
    phone: "+91 98765 43213",
    available: "Today",
    distance: 3.2,
    tags: ["Pain Management", "Respiratory Care", "Immunity Boost"],
    timeSlots: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
  },
  {
    id: 3,
    name: "Niramay Ayurvedic Hostpital",
    rating: 4.7,
    reviews: 189,
    image: "banner2.png",
    address: "Phase 7, Mohali",
    timing: "8:30 AM - 6:30 PM",
    phone: "+91 98765 43211",
    available: "Tomorrow",
    distance: 4.1,
    tags: ["Joint Care", "Digestive Health", "Stress Management"],
    timeSlots: ["8:30 AM", "11:00 AM", "2:30 PM", "4:30 PM"]
  },
  {
    id: 4,
    name: "Ayur Treat Ayurveda",
    rating: 4.9,
    reviews: 312,
    image: "banner4.png",
    address: "Sector 8, Panchkula",
    timing: "9:00 AM - 8:00 PM",
    phone: "+91 98765 43212",
    available: "Today",
    distance: 5.7,
    tags: ["Chronic Diseases", "Women's Health", "Mental Wellness"],
    timeSlots: ["9:00 AM", "12:00 PM", "3:30 PM", "6:00 PM"]
  }
];

const ClinicCard = ({ name, rating, reviews, address, timing, phone, available, distance, tags, image, timeSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleBook = () => {
    if (!selectedSlot) {
      alert("Please select a time slot to book.");
      return;
    }
    // ✅ Redirect to patient dashboard with selected clinic info
    navigate("/patient-dashboard", { state: { clinicName: name, timeSlot: selectedSlot } });
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 3px 18px #ece8d855",
      overflow: "hidden",
      marginBottom: 20,
      position: "relative",
      minWidth: 305
    }}>
      {image &&
        <div style={{ maxHeight: 110, overflow: "hidden", position: "relative" }}>
          <img src={image} alt={name} style={{ width: "100%", height: 110, objectFit: "cover" }} />
          <span style={{
            position: "absolute", top: 12, right: 15, fontSize: 14, borderRadius: 12,
            background: "#333b", color: "#fff", padding: "2px 12px"
          }}>{distance} km</span>
        </div>
      }
      <span style={{
        position: "absolute", top: image ? 12 : 18, left: 18,
        background: available === "Today" ? "#11c783" : "#ffcc0033",
        color: available === "Today" ? "#fff" : "#7e6d04",
        fontWeight: 600, fontSize: 13, borderRadius: 10, padding: "2.5px 13px"
      }}>
        {available === "Today" ? "Available Today" : "Available Tomorrow"}
      </span>
      <div style={{ padding: "18px 20px 16px 20px" }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>{name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 7 }}>
          <Star style={{ color: "#FFA206", height: 18 }} size={18} />
          <span style={{ color: "#222", fontWeight: 600, fontSize: 15 }}>{rating}</span>
          <span style={{ color: "#696969", fontSize: 13 }}>({reviews} reviews)</span>
        </div>
        <div style={{ color: "#2d3142", fontSize: 14, display: "flex", alignItems: "center", gap: 4 }}>
          <MapPin style={{ width: 16, color: "#b6b301" }} />
          <span>{address}</span>
        </div>
        <div style={{ color: "#2d3142", fontSize: 14, margin: "2px 0", display: "flex", alignItems: "center", gap: 4 }}>
          <Clock style={{ width: 16, color: "#ecb40a" }} /> <span>{timing}</span>
        </div>
        <div style={{ color: "#2d3142", fontSize: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}>
          <Phone style={{ width: 16, color: "#14ad28" }} /> <span>{phone}</span>
        </div>
        <div style={{ margin: "9px 0 13px 0", display: "flex", flexWrap: "wrap", gap: 7 }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: "#f3f4f6", color: "#36a355", fontSize: 12, padding: "3px 11px",
              borderRadius: 10, fontWeight: 600
            }}>{tag}</span>
          ))}
        </div>

        <select
          value={selectedSlot}
          onChange={e => setSelectedSlot(e.target.value)}
          style={{
            width: "100%", padding: "10px 12px", borderRadius: 8,
            border: "1.5px solid #ddd", fontSize: 15, marginBottom: 12
          }}
        >
          <option value="">Select a time slot</option>
          {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
        </select>

        <button onClick={handleBook} style={{
          width: "100%", background: "linear-gradient(90deg, #FFA206 10%, #F8BB29 100%)",
          color: "#fff", fontWeight: 600, border: 0, borderRadius: 8, padding: "11px 0", fontSize: 16,
          marginBottom: 7, letterSpacing: 0.2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 9
        }}>
          <Tag size={19} style={{ marginBottom: -3 }} /> Book Appointment
        </button>

        <button style={{
          position: "absolute", bottom: 21, right: 20,
          background: "#fff", borderRadius: "50%", border: "1.5px solid #ffa20633", padding: 7, color: "#ffa206", fontWeight: 500, fontSize: 18, cursor: "pointer"
        }}
          title="Call Clinic"><Phone /></button>

      </div>
    </div>
  );
};

const ClinicsGridPage = () => (
  <div style={{ minHeight: "100vh", background: "linear-gradient(120deg, #FEF6E7 10%, #F3FAED 100%)", padding: "0 0 28px" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "31px 0 20px", maxWidth: 900, margin: "auto" }}>
      <button style={{ marginRight: 15, border: "none", background: "none", fontSize: 21, cursor: "pointer", color: "#2d3142" }}>
        {"←"}
      </button>
      <span style={{ fontWeight: 700, fontSize: 22, color: "#222" }}>Nearby Ayurvedic Clinics</span>
    </div>

    <div style={{
      maxWidth: 900, margin: "auto", marginBottom: 21,
      background: "#fff", borderRadius: 12, boxShadow: "0 2px 10px #eaddcd12",
      padding: "16px 22px", display: "flex", alignItems: "center", gap: 14
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: "50%", background: "#faf6e2",
        color: "#49ad70", fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        r
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600 }}>rakhi</div>
        <div style={{ color: "#546161", fontSize: 14 }}>Age 20 • female • 87813802</div>
      </div>
      <div style={{ color: "#535d5e", fontSize: 13, marginLeft: "auto" }}>
        Found 4 clinics near <span style={{ fontWeight: 600 }}>wadkjawd</span>
      </div>
    </div>

    <div style={{ maxWidth: 900, margin: "auto", marginBottom: 24, marginTop: 2, display: "flex", alignItems: "center", gap: 7 }}>
      <button style={{ background: "#FFA206", color: "#fff", fontWeight: 700, border: 0, borderRadius: 7, padding: "8px 22px 7px 22px", fontSize: 15, marginRight: 6, cursor: "pointer" }}>Distance</button>
      <button style={{ background: "#f3f2e0", color: "#23281c", fontWeight: 500, border: 0, borderRadius: 7, padding: "8px 22px 7px 22px", fontSize: 15, marginRight: 6, cursor: "pointer" }}>Rating</button>
      <button style={{ background: "#f3f2e0", color: "#23281c", fontWeight: 500, border: 0, borderRadius: 7, padding: "8px 22px 7px 22px", fontSize: 15, cursor: "pointer" }}>Price</button>
    </div>

    <div style={{ maxWidth: 900, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22 }}>
      {clinics.map(clinic => <ClinicCard key={clinic.id} {...clinic} />)}
    </div>
  </div>
);

export default ClinicsGridPage;
