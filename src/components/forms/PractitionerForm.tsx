import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const PractitionerForm: React.FC = () => {
  const { selectRole } = useAuth();
  const navigate = useNavigate(); // Initialize the hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    specialization: "",
    licenseNumber: "",
    clinicName: "",
    clinicAddress: "",
    licenseFile: null as File | null,
    idProof: null as File | null,
    password: "",
    otp: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Practitioner Form Data:", formData);
    
    // Select the practitioner role (as per your existing logic)
    selectRole("practitioner");

    // Redirect to the Practitioner Dashboard
    navigate("/practitioner-dashboard");
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm mt-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Practitioner Information</CardTitle>
        <CardDescription>Fill in your details to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />

          {/* Professional Info */}
          <Input name="degree" placeholder="Medical Degree" value={formData.degree} onChange={handleChange} />
          <Input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} />
          <Input name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} />

          {/* Practice Info */}
          <Input name="clinicName" placeholder="Hospital/Clinic Name" value={formData.clinicName} onChange={handleChange} />
          <textarea
            name="clinicAddress"
            placeholder="Clinic Address"
            value={formData.clinicAddress}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300"
          />

          {/* Documents */}
          <div>
            <label className="block text-sm font-medium mb-1">Medical License (scanned)</label>
            <input type="file" name="licenseFile" accept="image/*,application/pdf" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ID Proof (Aadhar/Passport)</label>
            <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleChange} />
          </div>

          {/* Login Credentials */}
          <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <Input name="otp" placeholder="OTP (optional)" value={formData.otp} onChange={handleChange} />

          <Button type="submit" className="w-full mt-4">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PractitionerForm;