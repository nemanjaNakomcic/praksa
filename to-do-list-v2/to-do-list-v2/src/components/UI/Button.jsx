import styles from "../../styles/components/Button.module.scss";

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
