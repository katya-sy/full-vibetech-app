import cl from "./Input.module.css";

function Input({ tag, register, error, ...props }) {
  if (tag === "textarea") {
    return (
      <div className={cl.wrapper}>
        <textarea
          {...props}
          {...register}
          className={`${cl.input} ${cl.textarea}`}
        />
        {error?.type === "required" && (
          <p className={cl.input__error}>Заполните это поле!</p>
        )}
      </div>
    );
  }
  return (
    <div className={cl.wrapper}>
      <input {...register} {...props} className={cl.input} />
      {(error?.type === "required" && (
        <p className={cl.input__error}>Заполните это поле!</p>
      )) ||
        (error?.type === "minLength" && (
          <div className={cl.input__error}>
            Пароль должен быть не менее 8 символов!
          </div>
        )) ||
        (error?.type === "pattern" && (
          <div className={cl.input__error}>
            Можно использовать только латинские буквы и цифры!
          </div>
        )) ||
        (error?.type === "validate" && (
          <div className={cl.input__error}>Пароли не совпадают!</div>
        ))}
    </div>
  );
}

export default Input;
