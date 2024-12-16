import styles from "./index.module.css";

export const BtnSubmit = ({ children, type }) => {
  return (
    <button className={styles.submit} type={type}>
      {children}
    </button>
  );
};
