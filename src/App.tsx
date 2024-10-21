import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import { OrderObject } from "./types/orders";
import { OrderBasketContext, ProductsContext } from "./hooks/Contexts";
import { createGroupProduct } from "./utils/generator-prod";
import LeftBar from "./components/LeftBar/LeftBar";
import { useLocalStorage } from "./hooks/LocalStorage/LocalStorage";

const MAX_PRODUCTS = 26;

function App() {
  const compareSortCategory = (
    a: { category: string },
    b: { category: string }
  ) => {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }
    return 0;
  };
  const [groupProductStorage, setGroupProductStorage] = useLocalStorage(
    "group_product",
    []
  );
  if (!groupProductStorage) {
    const groupProduct =
      createGroupProduct(MAX_PRODUCTS).sort(compareSortCategory);
    setGroupProductStorage(groupProduct);
  }

  const [orders, setOrders] = useState<OrderObject[]>([]);
  const [products, setProducts] = useState<OrderObject[]>(groupProductStorage);
  const [filterProducts, setFilterProducts] = useState<OrderObject[] | []>([]);
  const [searchInputQuery, setSearchInputQuery] = useState<string>("");
  const choppingList = (
    order: OrderObject[] | ((prevOrders: OrderObject[]) => OrderObject[])
  ) => setOrders(order);
  return (
    <>
      <div className="container-fluid container-store ps-0 pe-0">
        <ProductsContext.Provider
          value={{
            products,
            setProducts,
            filterProducts,
            setFilterProducts,
            searchInputQuery,
            setSearchInputQuery,
          }}
        >
          <OrderBasketContext.Provider value={{ orders, choppingList }}>
            <Header></Header>
            <LeftBar></LeftBar>
            <Main></Main>
          </OrderBasketContext.Provider>
        </ProductsContext.Provider>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
