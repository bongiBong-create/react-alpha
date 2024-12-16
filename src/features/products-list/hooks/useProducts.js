import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useProduct = () => {
  const {
    products,
    favoriteProducts,
    isLoading,
    filter,
    currentPage,
    productPerPage,
  } = useSelector((state) => state.products);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexOfLastProduct - productPerPage;

  const currentProducts = products.slice(indexFirstProduct, indexOfLastProduct);

  const jeweleryProducts = useMemo(() => {
    return products.filter((product) => product.category === "jewelery");
  }, [products]);

  const electronicsProducts = useMemo(() => {
    return products.filter((product) => product.category === "electronics");
  }, [products]);

  let filteredProducts;

  if (filter === "jewelery") {
    filteredProducts = jeweleryProducts;
  } else if (filter === "electronics") {
    filteredProducts = electronicsProducts;
  } else if (filter === "favorite") {
    filteredProducts = favoriteProducts;
  } else {
    filteredProducts = currentProducts;
  }

  return {
    filteredProducts,
    isLoading,
  };
};
