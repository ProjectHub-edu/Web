import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../components/Input/Input";

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
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        errors={errors}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        errors={errors}
      />

      <button type="submit" disabled={!!errors.email || !!errors.password}>
        Sign In
      </button>
      {/* TODO: Google Auth */}
    </form>
  );
}

export default LoginForm;
