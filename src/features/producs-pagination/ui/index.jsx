import { usePage } from "../hooks/usePage";

import styles from "./index.module.css";
export const ProductsPagination = () => {
  const { currentPage, goToNextPage, goToPreviousPage, totalPages } = usePage();

  return (
    <div className={styles.pagination}>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Назад
      </button>
      <span>
        Страница {currentPage} из {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Вперед
      </button>
    </div>
  );
};
