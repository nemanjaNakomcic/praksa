import styles from "../../styles/components/TodoFilter.module.scss";

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={value === "all" ? styles.selected : ""}>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={value === "all"}
          onChange={() => onChange("all")}
        />
        All
      </label>
      <label className={value === "active" ? styles.selected : ""}>
        <input
          type="radio"
          name="filter"
          value="active"
          checked={value === "active"}
          onChange={() => onChange("active")}
        />
        Active
      </label>
      <label className={value === "inactive" ? styles.selected : ""}>
        <input
          type="radio"
          name="filter"
          value="inactive"
          checked={value === "inactive"}
          onChange={() => onChange("inactive")}
        />
        Inactive
      </label>
    </div>
  );
};

export default Filter;
