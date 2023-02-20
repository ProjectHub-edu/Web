import { useState } from "react";
import { createPortal } from "react-dom";
import { Route, Routes } from "react-router";
import AuthForm from "./features/auth/components/AuthForm";
import { Dialog } from "@mui/material";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import { AuthContext, AuthProvider } from "./features/auth/context/AuthContext";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {isOpen &&
        createPortal(
          <Dialog open={isOpen} onClose={closeModal}>
            <AuthForm closeModal={closeModal} />
          </Dialog>,
          document.body
        )}
    </AuthProvider>
  );
}

export default App;
