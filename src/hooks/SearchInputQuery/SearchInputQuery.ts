import { useContext } from "react";
import { ProductsContext } from '../Contexts';

const useSearchInputQueryContext = () => {
    const context = useContext(ProductsContext);

    const { searchInputQuery, setSearchInputQuery } = context;
    if (!context) {
        throw new Error(
            "useSearchInputQueryContext has to be used within <ProductsContext.Provider>"
        );
    }
    return { searchInputQuery, setSearchInputQuery }
}

export default useSearchInputQueryContext;
