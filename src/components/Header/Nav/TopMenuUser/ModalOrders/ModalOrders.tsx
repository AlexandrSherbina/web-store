import React from "react";
import { Modal } from "../../../../UI/Modal/Modal";
import { OrderObject } from "../../../../../types/orders";
import "./ModalOrders.scss";
interface ModalOrdersTypes {
  onClose: () => void;
  orders: OrderObject[] | [];
  choppingList: (val: OrderObject[] | []) => void;
}
const ModalOrders: React.FC<ModalOrdersTypes> = ({
  orders,
  choppingList,
  onClose,
}) => {
  const regExDecimal = (string: string) =>
    parseInt(string.split(/\D*/).join(""));
  const total = (arr: any) =>
    [...arr].reduce((acc, priceCurr) => acc + regExDecimal(priceCurr.price), 0);

  return (
    <>
      <Modal onClose={onClose}>
        <h3>Orders</h3>
        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input
            readOnly
            type="text"
            aria-label="First name"
            placeholder="Alex"
            className="form-control"
          />
          <input
            readOnly
            type="text"
            aria-label="Last name"
            placeholder="Sherbina"
            className="form-control"
          />
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            readOnly
            className="form-control-plaintext"
            id="floatingPlaintextInput"
            placeholder="name@example.com"
            value="name@example.com"
          />
          <label htmlFor="floatingPlaintextInput">Email</label>
        </div>
        <button
          onClick={() => choppingList([])}
          type="button"
          className="btn btn-outline-warning"
        >
          Remove All
        </button>
        <div className="table-responsive vh-60">
          <table className="table table-striped table-hover">
            <thead
              style={{ position: "sticky", top: 0, zIndex: 1020 }}
              className="table-light"
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {orders.map((card, i) => {
                return (
                  <tr key={`order-${card.id}-${i}`}>
                    <th
                      scope="row"
                      className="fs-6 "
                      style={{
                        width: "10%",
                        height: "10%",
                        overflow: "hidden",
                      }}
                    >
                      {i}
                    </th>
                    <td className="w-25">{card.title}</td>
                    <td>{card.category}</td>
                    <td className="w25" style={{ overflow: "hidden" }}>
                      {card.description}
                    </td>
                    <td>{card.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Total:</th>
                <td colSpan={4}> {total(orders)} $</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Modal>
    </>
  );
};

export default ModalOrders;
