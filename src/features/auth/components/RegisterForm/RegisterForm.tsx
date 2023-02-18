import { useForm, SubmitHandler } from "react-hook-form";

interface IRegisterFormInput {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormInput>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onSubmit"
  });

  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true, maxLength: 20 })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, maxLength: 20 })}
      />
      <input placeholder="Password" type="password" {...register("password", {required: true})} />
      <input
        placeholder="Repeat Password"
        type="password"
        {...register("repeatPassword")}
      />

      <button type="submit">Sign Up</button>
      {/* TODO: Google Auth */}
    </form>
  );
}

export default RegisterForm;
