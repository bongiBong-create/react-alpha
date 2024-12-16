import { ProductsPagination } from "../../../features/producs-pagination";
import { ProductsFilter } from "../../../features/products-filter";
import { ProductList } from "../../../features/products-list";

export const ProductsPage = () => {
  return (
    <section>
      <ProductsFilter />
      <ProductList />
      <ProductsPagination />
    </section>
  );
};
