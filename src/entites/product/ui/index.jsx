import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  addFavoriteProduct,
  deleteProduct,
  removeFavoriteProduct,
} from "../model/productsSlice";

import { Icon } from "../../../shared/ui/icon";

import styles from "./index.module.css";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  
  const [isFav, setIsFav] = useState(false);
  const favoriteProducts = useSelector(
    (state) => state.products.favoriteProducts
  );

  const handleFavorite = (product) => {
    if (favoriteProducts.includes(product)) {
      setIsFav(!isFav);
      dispatch(removeFavoriteProduct(product.id));
    } else {
      setIsFav(!isFav);
      dispatch(addFavoriteProduct(product));
    }
  };

  return (
    <li className={styles.product} id={product.id}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image ? product.image : ""} alt="image" />
        <h3>{product.title}</h3>
        <p className={pathname === "/" ? styles.description : ""}>
          {product.description}
        </p>
        <p>{product.price}$</p>
      </Link>

      {pathname === "/" && (
        <div className={styles.product__btns}>
          <button onClick={() => handleFavorite(product)}>
            <Icon icon="favorite" isFav={isFav} />
          </button>
          <button onClick={() => dispatch(deleteProduct(product.id))}>
            <Icon icon="delete" />
          </button>
        </div>
      )}
    </li>
  );
};
