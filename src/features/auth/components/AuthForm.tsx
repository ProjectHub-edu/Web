import { Tab, Tabs, TabList } from "@mui/joy";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
  const [formType, setFormType] = useState<"login" | "register">("login");

  const toggleFormType = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  return (
    <Box sx={{ padding: "20px 40px", minWidth: "400px" }}>
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
