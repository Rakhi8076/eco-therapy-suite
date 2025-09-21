import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const InstitutionalAdminForm: React.FC = () => {
  const { selectRole } = useAuth();
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    professionalDetails: "",
    institutionType: "",
    registrationNumber: "",
    issuingAuthority: "",
    registrationFile: null as File | null,
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
    console.log("Institutional Admin Form Data:", formData);
    
    // Select role in auth context
    selectRole("institutional-admin");

    // ✅ Navigate to Institutional Admin Dashboard after submit
    navigate("/institutional-admin-dashboard");
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm mt-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Institutional Admin Information</CardTitle>
        <CardDescription>Fill in your details to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Institution Info */}
          <Input name="institutionName" placeholder="Institution Name" value={formData.institutionName} onChange={handleChange} />
          <Input name="contactPerson" placeholder="Contact Person Name" value={formData.contactPerson} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300"
          />

          {/* Professional / Legal Info */}
          <Input name="professionalDetails" placeholder="Professional / Legal Details" value={formData.professionalDetails} onChange={handleChange} />
          <Input name="institutionType" placeholder="Type of Institution (Hospital, Clinic, Lab, etc.)" value={formData.institutionType} onChange={handleChange} />
          <Input name="registrationNumber" placeholder="Registration / License Number" value={formData.registrationNumber} onChange={handleChange} />
          <Input name="issuingAuthority" placeholder="Issuing Authority (State / National Medical Council, Health Dept.)" value={formData.issuingAuthority} onChange={handleChange} />

          {/* Documents Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration / License Certificate (scanned copy)</label>
            <input type="file" name="registrationFile" accept="image/*,application/pdf" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Identity Proof of Head / Administrator (Aadhar / Passport / Driving License)</label>
            <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleChange} />
          </div>

          {/* Login Credentials */}
          <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <Input name="otp" placeholder="OTP / 2FA Verification (optional)" value={formData.otp} onChange={handleChange} />

          <Button type="submit" className="w-full mt-4">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InstitutionalAdminForm;
