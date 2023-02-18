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
import { AuthContext } from "./features/auth/context/AuthContext";
import { User } from "./types/User";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState< User | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthContext.Provider value={{user, setUser}}>
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
            <AuthForm />
          </Dialog>,
          document.body
        )}
    </AuthContext.Provider>
  );
}

export default App;
