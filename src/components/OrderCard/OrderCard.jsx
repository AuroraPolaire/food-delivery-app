import React from "react";
import { useSelector } from "react-redux";
import { selectOrder } from "../../redux/productsSelector";
import { StyledOrderCard, StyledOrderContainer } from "./OrderCard.styled";

const OrderCard = () => {
  const userOrder = useSelector(selectOrder);
  const { total, order } = userOrder;
  return (
    <>
      <StyledOrderContainer>
        <div className="container">
          {order.map(({ amount, price, strMeal, strMealThumb, idMeal }) => {
            return (
              <StyledOrderCard key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
                <div className="cart-item-data">
                  <p>{strMeal}</p>
                  <p className="price">
                    {amount} x {price} &euro;
                  </p>
                </div>
              </StyledOrderCard>
            );
          })}
        </div>
        <div className="total">Total price: {total} &euro;</div>
      </StyledOrderContainer>
    </>
  );
};

export default OrderCard;
