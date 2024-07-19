import React, { useState } from "react";
import CurrentOrder from "../../components/orderStatus/currentOrder/CurrentOrder";
import FinishedOrder from "../../components/orderStatus/finishedOrder/FinishedOrder";

const OrderStatus = () => {
  const [orderStep, setOrderStep] = useState(6);
  return (
    <>
      {orderStep <= 5 ? (
        <CurrentOrder orderStep={orderStep} />
      ) : (
        <FinishedOrder />
      )}
    </>
  );
};

export default OrderStatus;
