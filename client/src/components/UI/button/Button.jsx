import cl from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button {...props} className={cl.btn}>
      {children}
    </button>
  );
}

export default Button;
