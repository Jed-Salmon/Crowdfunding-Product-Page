import classes from "./Button.module.css";

const Button = (props) => {
  const disabled = props.disabled ? { background: "#ccc" } : {};
  const minHeight = props.customStyle;

  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      className={classes.btn}
      onClick={props.onClick}
      style={{ ...disabled, ...minHeight }}
    >
      {props.children}
    </button>
  );
};

export default Button;
