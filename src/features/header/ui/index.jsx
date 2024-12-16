import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/">Products</Link>
        <Link to="/products/create">Create Product</Link>
      </nav>
    </header>
  );
};
