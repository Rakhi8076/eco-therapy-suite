import { createRoot } from "react-dom/client";
import React from "react"; // React import zaruri hai for JSX
import App from "./App.tsx";
import { AuthProvider } from "@/contexts/AuthContext"; // AuthProvider import karo
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

