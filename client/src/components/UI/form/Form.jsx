import cl from "./Form.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

const Form = observer(
  ({ buttonText, feedbackForm, registrationForm, login }) => {
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      if (feedbackForm) {
        reset();
      } else {
        login();
        reset();
      }
    };

    return (
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Имя"}
          register={register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
          error={errors.name}
        />
        {(feedbackForm || registrationForm) && (
          <Input
            type={"email"}
            placeholder={"E-mail"}
            register={register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            error={errors.email}
          />
        )}
        {(login || registrationForm) && (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            register={register("password", {
              required: true,
              minLength: 8,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
            aria-invalid={errors.password ? "true" : "false"}
            error={errors.password}
          />
        )}
        {registrationForm && (
          <Input
            type={"password"}
            placeholder={"Повторите пароль"}
            register={register("doublePassword", {
              required: true,
              minLength: 8,
              pattern: /^[a-zA-Z0-9]+$/,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "true";
                }
              },
            })}
            aria-invalid={errors.doublePassword ? "true" : "false"}
            error={errors.doublePassword}
          />
        )}
        {feedbackForm && (
          <Input
            placeholder={"Сообщение"}
            tag={"textarea"}
            register={register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            error={errors.message}
          />
        )}
        <Button style={{ width: "100%" }}>{buttonText}</Button>
      </form>
    );
  }
);

export default Form;
