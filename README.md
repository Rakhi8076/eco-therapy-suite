# 🌿 PanchArogya – Eco Therapy Suite

PanchArogya is a React-based web application that promotes holistic wellness through Ayurveda, Panchakarma, Yoga, and Meditation practices. The platform provides an easy-to-use interface to explore therapies, track wellness, and access therapy-related resources.

## ✨ Features

-   **🧘 Therapy Information:** Detailed insights on Panchakarma & Ayurvedic treatments.
-   **📊 Dashboard:** Displays GPA, attendance, and a subjects summary (for demo purposes).
-   **👥 Users Page:** Fetches data from an API (jsonplaceholder) to display user details.
-   **🔐 Authentication:** Login & signup pages with dummy validation.
-   **🌙 Dark Mode:** An optional theme switcher for a better user experience.
-   **📱 Responsive UI:** Optimized for both mobile and desktop.

## 📂 Project Structure

-   `src/components/auth/`: Contains components for Login, Signup, Role Selection, and Logout.
-   `src/pages/`: Holds core page components like Home, Dashboard, and Users.
-   `src/assets/`: Stores local images & icons.
-   `App.jsx`: The main application file with routing.
-   `package.json`: Manages all project dependencies.

## 🛠️ Tech Stack

-   **Frontend:** React, Tailwind CSS
-   **Routing:** React Router
-   **State & API:** Fetch / Axios
-   **i18n:** i18next, react-i18next
-   **Deployment:** Vercel / Netlify / GitHub Pages

## 🚀 Live Demo

Check out the live website here: 👉 [https://pancharogya.onrender.com/](https://pancharogya.onrender.com/)

---

### **Deployment Instructions (for Render)**

To fix the "Page Not Found" error on Render, follow these steps:

1.  **Dashboard:** Go to your **Render dashboard** and select your web service.
2.  **Settings:** Navigate to the **Settings** tab.
3.  **Build & Deploy:** Configure the following commands under the **Build & Deploy** section:

    -   **Build Command:** `npm install && npm run build`
        _Explanation: This command first installs all dependencies and then builds your React application for production, creating a `dist` folder._

    -   **Start Command:** `npm run start`
        _Explanation: This command runs the script in your `package.json` file that starts the production server to serve the built files._

4.  **Save & Deploy:** Save the changes and trigger a new **Manual Deploy**. This will rebuild and redeploy your application with the correct settings.

**Note:** Since your `package.json` file is in the root of your repository, you should leave the **Root Directory** field blank on Render.
