import React from "react";
import { useSelector } from "react-redux";
import IdForm from "../../components/IdForm/IdForm";
import OrderCard from "../../components/OrderCard/OrderCard";
import { selectOrder } from "../../redux/productsSelector";
import { HistoryContainer } from "./History.styled";
import { Helmet } from "react-helmet";

const History = () => {
  const order = useSelector(selectOrder);
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <HistoryContainer>
        <h1>Review orders</h1>

        <IdForm />

        {Object.keys(order).length !== 0 ? <OrderCard /> : null}
      </HistoryContainer>
    </>
  );
};

export default History;
