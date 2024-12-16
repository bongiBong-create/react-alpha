import { useDispatch, useSelector } from "react-redux";
import { addCurrentPage } from "../../../entites/product";

export const usePage = () => {
  const dispatch = useDispatch();
  const { productPerPage, currentPage, products } = useSelector(
    (state) => state.products
  );

  const totalPages = Math.ceil(products.length / productPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(addCurrentPage(-1));
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(addCurrentPage(1));
    }
  };

  const goToPage = (pageNumber) => {
    dispatch(addCurrentPage(pageNumber));
  };

  return {
    currentPage,
    goToPreviousPage,
    goToNextPage,
    totalPages,
    goToPage,
  };
};
