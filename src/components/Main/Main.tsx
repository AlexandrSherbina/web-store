import Cards from "./Cards/Cards";
import useProductsContext from "./../../hooks/Products/Products";
import useFilterProductsContext from "../../hooks/FilterProducts/FilterProducts";
import useSearchInputQueryContext from "../../hooks/SearchInputQuery/SearchInputQuery";

const Main = () => {
  const { products } = useProductsContext();
  const { searchInputQuery } = useSearchInputQueryContext();
  const { filterProducts } = useFilterProductsContext(
    "title",
    products,
    searchInputQuery
  );

  return (
    <main>
      <h1>Store market</h1>
      <Cards dataCard={filterProducts}></Cards>
    </main>
  );
};

export default Main;
