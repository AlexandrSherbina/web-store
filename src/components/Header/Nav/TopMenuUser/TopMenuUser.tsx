import React, { useState } from "react";
import "./TopMenuUser.scss";
import useOrderBasketContext from "../../../../hooks/Orders/Ordres";
import IconBasket2 from "../../../../icon/basket";
import { Modal } from "../../../UI/Modal/Modal";
import { createPortal } from "react-dom";
import ModalOrders from "./ModalOrders/ModalOrders";

interface DataType {
  itemName: string;
  url: string;
  active?: boolean;
}

interface TopMenuType {
  data?: DataType[];
  order?: object[];
}

const TopMenuUser: React.FC<TopMenuType> = () => {
  const { orders, choppingList } = useOrderBasketContext();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <ul className="list-nav menu-top-user-custom">
        <li className="list-nav-item menu-top-user-custom-item">@ Alex</li>
        <li className="list-nav-item menu-top-user-custom-item">
          <i onClick={() => setShowModal(true)} className="basketImg">
            <IconBasket2 className="fillColor" width="2rem" height="2rem" />
            {orders.length !== 0 && (
              <span className="menu-top-user-orders">{orders.length}</span>
            )}
          </i>
        </li>
      </ul>
      {showModal &&
        createPortal(
          <ModalOrders
            orders={orders}
            choppingList={choppingList}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
};

export default TopMenuUser;
