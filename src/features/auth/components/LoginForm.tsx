import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { login } from "../services/auth";
import { useMutation } from "react-query";
interface ILoginForm {
  email: string;
  password: string;
}


function LoginForm() {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation(({ email, password }: ILoginForm) =>
    login(email, password)
  );

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    toast
      .promise(
        loginMutation.mutateAsync(data),
        {
          pending: "Logging in...",
          success: "Logged in successfully",
          error: "Wrong credentials",
        },
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      )
      .then((user) => {
        setUser(user);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          {...register("email", { required: true })}
          error={errors.email ? true : false}
          helperText="Email is required"
          sx={{ width: "100%" }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          {...register("password", {
            required: true,
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
          })}
          error={errors.password ? true : false}
          helperText="Must be at least 6 characters(1 uppercase, 1 lowercase, 1 number)"
          sx={{ width: "100%" }}
        />
        <Button
          type="submit"
          variant="outlined"
          size="large"
          sx={{
            color: "#2C294D",
            border: "none",
            borderRadius: "10x",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            "&:hover": {
              border: "none",
            },
          }}
          disabled={Object.keys(errors).length > 0}
        >
          Login
        </Button>
        {/* TODO: Google Auth */}
      </Box>
    </form>
  );
}

export default LoginForm;
