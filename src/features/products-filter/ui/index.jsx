import { useDispatch } from "react-redux";
import { filters } from "../model/config";
import { toggleFilter } from "../../../entites/product";

import styles from "./index.module.css";
export const ProductsFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.products__filter}>
      {filters.map((filter) => (
        <button
          className={styles.filter__btn}
          key={filter.id}
          onClick={() => dispatch(toggleFilter(filter.filter))}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};
