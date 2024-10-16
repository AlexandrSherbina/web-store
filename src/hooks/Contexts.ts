import { createContext } from "react";
import { OrderObject } from "../types/orders";

interface OrderType {
    orders: OrderObject[] | [];
    choppingList: (val: OrderObject[] | ((prevOrders: OrderObject[]) => OrderObject[])) => void;
}

interface ProductsType {
    products: OrderObject[] | [];
    setProducts: (products: OrderObject[] | []) => void;
    filterProducts: OrderObject[] | [];
    setFilterProducts: (products: OrderObject[] | []) => void;
    searchInputQuery: string;
    setSearchInputQuery: (str: string) => void;
}
export const ProductsContext = createContext<ProductsType>({} as ProductsType);
export const OrderBasketContext = createContext<OrderType>({} as OrderType);
