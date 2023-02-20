import { Tab, Tabs, TabList } from "@mui/joy";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm({ closeModal }: { closeModal: () => void }) {
  const { user } = useContext(AuthContext);
  const [formType, setFormType] = useState<"login" | "register">("login");

  useEffect(() => {
    if (user) {
      closeModal();
    }
  }, [user, closeModal]);

  const toggleFormType = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  return (
    <Box sx={{ padding: "20px 40px", width: "450px" }}>
      <Tabs
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
        onChange={toggleFormType}
        value={formType}
      >
        <TabList
          sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", py: "10px" }}
        >
          <Tab sx={{ color: formType === "login" ? "#DB8A48" : "#2C294D" }}>
            Login
          </Tab>
          <Divider orientation="vertical" flexItem sx={{ mx: "10px" }} />
          <Tab sx={{ color: formType === "register" ? "#DB8A48" : "#2C294D" }}>
            Register
          </Tab>
        </TabList>
      </Tabs>
      {formType === "login" ? <LoginForm /> : <RegisterForm />}
    </Box>
  );
}
