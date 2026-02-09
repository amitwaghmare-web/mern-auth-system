import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

import "./App.css";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="app-container">
      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Route */}
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
