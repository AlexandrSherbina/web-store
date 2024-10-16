import { JSXElementConstructor, ReactElement } from "react";
import "./Cards.scss";
import Card from "./Card/Card";
import useOrderBasketContext from "../../../hooks/Orders/Ordres";
import { OrderObject } from "./../../../types/orders.d";

type ReactChild =
  | string
  | number
  | ReactElement<any, string | JSXElementConstructor<any>>;

interface CardsType {
  dataCard: OrderObject[];
  activeFakeCards?: boolean;
  children?: ReactChild;
}
const FakeCards = () =>
  Array(100)
    .fill(6)
    .map((empty, i) => {
      return (
        <div className="card" key={i + "cardId"}>
          Card {i}
        </div>
      );
    });

const Cards: React.FC<CardsType> = ({ dataCard, activeFakeCards }) => {
  const { orders, choppingList } = useOrderBasketContext();

  return (
    <>
      <div className="cards-container">
        {activeFakeCards ? (
          <FakeCards></FakeCards>
        ) : (
          <>
            {dataCard.map((card) => {
              const { id, title, description, category, price, img } = card;
              return (
                <Card key={id} customClassName="custom-card">
                  <div className="card-img">
                    <img
                      className="img-thumbnail"
                      src={img}
                      alt={"card" + id}
                    />
                  </div>
                  <h4 className="card-title">{title}</h4>
                  <div className="card-description overflow-y-hidden">
                    {description}
                  </div>
                  <div className="card-category">{category}</div>
                  <div className="card-price">Price: {price}</div>
                  <button
                    onClick={() =>
                      choppingList((prev: OrderObject[] | []) => {
                        const valid = prev.some(
                          (cardInner) => cardInner.id === id
                        );
                        return !valid ? [...prev, card] : prev;
                      })
                    }
                    className="btn btn-primary card-btn"
                    type="button"
                  >
                    Add To Basket
                  </button>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
