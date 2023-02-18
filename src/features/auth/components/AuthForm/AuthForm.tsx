import { useState } from "react"
import LoginForm from "../LoginForm/LoginForm"
import RegisterForm from "../RegisterForm/RegisterForm"
import styles from "./AuthForm.module.scss"

export default function AuthForm() {
  const [formType, setFormType] = useState<"login" | "register">("login")
  
  const toggleFormType = () => {
    setFormType(formType === "login" ? "register" : "login")
  }

  return (
    <div className={styles.authModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <button onClick={toggleFormType} disabled={formType === "login"}>
            Sign In
          </button>
          <div></div>
          <button onClick={toggleFormType} disabled={formType === "register"}>
            Sign Up
          </button>
        </div>
        {formType === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  ); 
}
