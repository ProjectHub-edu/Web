import { useForm, SubmitHandler } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

interface ILoginFormInput {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
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
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
          error={errors.password ? true : false}
          helperText="Must be at least 8 characters(1 uppercase, 1 lowercase, 1 number)"
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
