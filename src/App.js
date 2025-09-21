// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginPage } from "@/components/auth/LoginPage";
import { LandingPage } from "@/components/LandingPage";
import './i18n'; // Add this line to import the translation config

// ... (rest of your App.js code)