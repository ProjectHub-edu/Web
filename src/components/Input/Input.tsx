import styles from "./Input.module.scss";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  register: any;
  errors: any;
};

function Input({ type, errors, placeholder, register, name }: InputProps) {
  return (
    <div className={styles.formField}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true, maxLength: 20 })}
      />
      {errors[placeholder] && (
        <span className={styles.fieldError}>{placeholder} is required</span>
      )}
    </div>
  );
}

export default Input;
