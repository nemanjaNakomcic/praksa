import styles from "../../styles/components/Input.module.scss";

const Input = ({
  label,
  value,
  onChange,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
