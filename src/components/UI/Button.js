import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      className={classes.btn}
      onClick={props.onClick}
      style={props.disabled ? { background: "#ccc" } : {}}
    >
      {props.children}
    </button>
  );
};

export default Button;
