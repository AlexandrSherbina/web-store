import React, { useState } from "react";
import useProductsContext from "../../../hooks/Products/Products";
import useSearchInputQueryContext from "../../../hooks/SearchInputQuery/SearchInputQuery";

const Search: React.FC = () => {
  const { products } = useProductsContext();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { setSearchInputQuery } = useSearchInputQueryContext();

  const handleChangeSearchQuery = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleClickSearch = () => setSearchInputQuery(selectedOption);

  return (
    <>
      <form action="" className="d-flex" role="search">
        <input
          className="form-control me-2 search-control"
          type="search"
          aria-label="Search"
          list="searchOptions"
          id="search-product"
          placeholder="Search product..."
          onChange={handleChangeSearchQuery}
          value={selectedOption || ""}
        />
        <datalist id="searchOptions">
          {[...products].map((product) => {
            return <option key={`${product.id}`} value={product.title} />;
          })}
        </datalist>
        <button
          onClick={handleClickSearch}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
