import { useEffect, useState } from "react";
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
import CreateProject from "./pages/CreateProject";
import { ToastContainer } from "react-toastify";
import { usePersistentUser } from './features/auth/hooks/usePersistentUser';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = usePersistentUser()

  const closeModal = () => {
    setIsOpen(false);
  };

  const openAuthModal = () => {
    setIsOpen(true);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar openAuthModal={openAuthModal} />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Project Page */}
        <Route path="/projects/:projectId" element={<Project />} />

        {/* Project Page */}
        <Route path="/create-project" element={<CreateProject />} />

        {/* Profile Page */}
        <Route path="/profile/:userId" element={<Profile />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Login Modal */}
      {isOpen &&
        createPortal(
          <Dialog open={isOpen} onClose={closeModal}>
            <AuthForm closeModal={closeModal} />
          </Dialog>,
          document.body
        )}
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
