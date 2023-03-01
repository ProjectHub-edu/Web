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
import { User } from "./types/User";
import CreateProject from "./pages/CreateProject";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState< User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* Project Page */}
        <Route path='/projects/:projectId' element={<Project />} />

        {/* Project Page */}
        <Route path='/create-project' element={<CreateProject />} />

        {/* Profile Page */}
        <Route path='/profile/:userId' element={<Profile />} />

        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />
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
    </AuthContext.Provider>
  );
}

export default App;
