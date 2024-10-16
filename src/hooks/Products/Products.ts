import { useContext } from "react";
import { ProductsContext } from './../Contexts';

const useProductsContext = () => {
    const context = useContext(ProductsContext);

    const { products, setProducts } = context;
    if (!context) {
        throw new Error(
            "useProductsContext has to be used within <ProductsContext.Provider>"
        );
    }
    return { products, setProducts }
}

export default useProductsContext;
