import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const PatientForm: React.FC = () => {
  const { selectRole, updateUserName } = useAuth();

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
    console.log("Patient Form Data:", formData);

    // 1️⃣ Update user name in AuthContext
    if (updateUserName && formData.name.trim() !== "") {
      updateUserName(formData.name.trim());
    }

    // 2️⃣ Select patient role
    selectRole("patient");

    // Optionally: show success message or navigate
    alert("Form submitted successfully!");
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm mt-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Patient Information</CardTitle>
        <CardDescription>Fill in your details to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <Input
            name="contact"
            type="tel"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300"
          />
          <textarea
            name="history"
            placeholder="Medical History / Allergies"
            value={formData.history}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300"
          />
          <Button type="submit" className="w-full mt-4">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PatientForm;
