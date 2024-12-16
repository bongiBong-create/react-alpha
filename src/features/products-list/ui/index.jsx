import { useProduct } from "../hooks/useProducts";
import { Card } from "../../../entites/product";

import styles from "./index.module.css";

export const ProductList = () => {
  const { filteredProducts, isLoading } = useProduct();

  return (
    <ul className={styles.product__list}>
      {!isLoading &&
        filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </ul>
  );
};
