import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "@/contexts/AuthContext";
import "./index.css";
import "./i18n"; // 👈 yeh add karna zaruri hai (translations initialize hone ke liye)

// Get the root container
const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

// Create a React root
const root = createRoot(container);

// Render the app inside StrictMode with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
