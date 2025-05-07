import styles from "../../styles/components/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
