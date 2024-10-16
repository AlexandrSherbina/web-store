import { useContext } from "react";
import { OrderBasketContext } from "../Contexts";




const useOrderBasketContext = () => {
    const context = useContext(OrderBasketContext);
    const { orders, choppingList } = context;
    if (!context) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }

    return { orders, choppingList };
}

export default useOrderBasketContext;


