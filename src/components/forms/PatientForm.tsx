import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Calendar, Phone, Mail, MapPin, FileText } from "lucide-react";

const PatientForm: React.FC = () => {
  const { selectRole, updateUserName } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    history: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update username if set
    if (updateUserName && formData.name.trim() !== "") {
      updateUserName(formData.name.trim());
    }

    // Set role to patient (optional, agar tum ClinicGrid access ke liye role use karna chaho)
    selectRole("patient");

    // ✅ Navigate to ClinicGrid page
    navigate("/clinics");
  };

  const fieldStyle = {
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid #E5E7EB",
    fontSize: "1em",
    padding: "12px",
    paddingLeft: 14,
    marginBottom: 12,
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ background: "linear-gradient(120deg, #FEF6E7 10%, #F3FAED 100%)" }}
    >
      <Card
        className="max-w-md w-full mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-md my-8"
        style={{ borderRadius: 18 }}
      >
        <CardHeader className="text-center pt-8 pb-5">
          <CardTitle className="text-2xl mt-2 font-bold" style={{ color: "#23281c" }}>
            Patient Information
          </CardTitle>
          <CardDescription className="mt-1 font-medium text-gray-700">
            Fill in your details to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={fieldStyle}
              />
              <User className="absolute right-4 top-3.5 text-gray-300" size={18} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Input
                  name="age"
                  type="number"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  style={{ ...fieldStyle, marginBottom: 0 }}
                />
                <Calendar className="absolute right-4 top-3.5 text-gray-300" size={18} />
              </div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full"
                required
                style={{ ...fieldStyle, padding: "12px", appearance: "none" }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="relative">
              <Input
                name="contact"
                type="tel"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                style={fieldStyle}
              />
              <Phone className="absolute right-4 top-3.5 text-gray-300" size={18} />
            </div>
            <div className="relative">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={fieldStyle}
              />
              <Mail className="absolute right-4 top-3.5 text-gray-300" size={18} />
            </div>
            <div className="relative">
              <textarea
                name="address"
                placeholder="Address (e.g. Sector 17, Chandigarh)"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ ...fieldStyle, minHeight: 70, resize: "vertical", width: "100%" }}
              />
              <MapPin className="absolute right-4 top-3.5 text-gray-300" size={18} />
            </div>
            <div className="relative">
              <textarea
                name="history"
                placeholder="Medical History / Allergies"
                value={formData.history}
                onChange={handleChange}
                style={{ ...fieldStyle, minHeight: 46, resize: "vertical", width: "100%" }}
              />
              <FileText className="absolute right-4 top-3.5 text-gray-300" size={18} />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 font-semibold text-lg shadow-md"
              style={{
                background: "linear-gradient(90deg, #AF4F06 30%)",
                color: "#fff",
                borderRadius: 9,
                padding: "13px",
                letterSpacing: 1,
              }}
            >
              Find Clinics
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientForm;
