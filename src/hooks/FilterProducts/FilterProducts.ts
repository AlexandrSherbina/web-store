import { useContext, useEffect } from "react";
import { ProductsContext } from '../Contexts';
import { OrderObject } from "../../types/orders";


interface FilteredProductsContextInterface {
    filterProducts: OrderObject[] | [];
    setFilterProducts: (filteredProducts: OrderObject[]) => void;
}
type FilterField = 'title' | 'category' | 'price' | "description" | "id";
type UseFilterProductsContextType = (field: FilterField, products: OrderObject[] | [], searchInputQuery: string | string[]) => FilteredProductsContextInterface;

const useFilterProductsContext: UseFilterProductsContextType = (field, products, searchInputQuery) => {
    const context = useContext(ProductsContext);

    const { filterProducts, setFilterProducts } = context;
    if (!context) {
        throw new Error(
            "useFilterProductsContext has to be used within <ProductsContext.Provider>"
        );
    }

    useEffect(() => {
        type StringKey<T> = keyof T & string;
        const filteredProducts = [...products].filter((product: OrderObject) => {
            if (field in product && typeof product[field as StringKey<OrderObject>] === 'string') {
                if (typeof searchInputQuery === 'string') {
                    return (product[field as StringKey<OrderObject>]).toString().slice(0, searchInputQuery.length).toLowerCase() ===
                        searchInputQuery.toLowerCase()
                } else if (Array.isArray(searchInputQuery)) {
                    // return searchInputQuery.length === 0 ? true : searchInputQuery.includes(product[field])
                    return searchInputQuery.includes(product[field])
                } else {
                    return false;
                }
            }
            return false;
        });
        setFilterProducts(filteredProducts);
    }, [searchInputQuery])

    return { filterProducts, setFilterProducts }
}

export default useFilterProductsContext;
