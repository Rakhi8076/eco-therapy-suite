import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const SuperAdminForm: React.FC = () => {
  const { user, selectRole } = useAuth();
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    profilePicture: null as File | null,
    password: "",
    otp: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Super Admin Form Data:", formData);

    // ✅ Select role in auth context
    selectRole("super-admin");

    // ✅ Navigate to Super Admin Dashboard
    navigate("/super-admin-dashboard");
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm mt-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Super Admin Account</CardTitle>
        <CardDescription>Manage your account and profile</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ backgroundColor: '#FFFfff' }}/>
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ backgroundColor: '#FFFfff' }}/>
          <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} style={{ backgroundColor: '#FFFfff' }}/>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Picture (optional)</label>
            <input type="file" name="profilePicture" accept="image/*" onChange={handleChange}style={{ backgroundColor: '#FFFfff' }} />
          </div>

          {/* Account Management */}
          <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{ backgroundColor: '#FFFfff' }}/>
          <Input name="otp" placeholder="OTP / 2FA Verification (optional)" value={formData.otp} onChange={handleChange} style={{ backgroundColor: '#FFFfff' }}/>

          <Button type="submit" className="w-full mt-4" style={{ backgroundColor: '#AF4F06' }}>Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SuperAdminForm;
