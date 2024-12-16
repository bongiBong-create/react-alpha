import { useSelector } from "react-redux";
import { Card } from "../../../entites/product";
import { useParams } from "react-router-dom";

import styles from "./index.module.css";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products, isLoading } = useSelector((state) => state.products);
  const product = products[id - 1];

  return (
    <section className={styles.products__details}>
      {!isLoading && <Card product={product} />}
    </section>
  );
};
