import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import { register as registerApi } from "../services/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useMutation } from 'react-query';
interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

function RegisterForm() {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<IRegisterForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

   const registerMutation = useMutation(
     ({ username, email, password }: IRegisterForm) =>
       registerApi(username, email, password)
   );

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    toast
      .promise(
        registerMutation.mutateAsync(data),
        {
          pending: "Register....",
          success: "Registered successfully",
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
          label="Username"
          type="text"
          {...register("username", { required: true })}
          error={errors.username ? true : false}
          helperText="Username is required"
          sx={{ width: "100%" }}
        />
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
          {...register("password", { required: true })}
          error={errors.password ? true : false}
          helperText="Must be at least 8 characters"
          sx={{ width: "100%" }}
        />
        <TextField
          variant="outlined"
          label="Password Repeat"
          type="password"
          {...register("passwordRepeat", { required: true })}
          error={getValues("password") !== getValues("passwordRepeat")}
          helperText="Must be the same as password"
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
          Register
        </Button>
        {/* TODO: Google Auth */}
      </Box>
    </form>
  );
}

export default RegisterForm;
