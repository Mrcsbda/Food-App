import React, { useState } from "react";
import CurrentOrder from "../../components/orderStatus/currentOrder/CurrentOrder";

const OrderStatus = () => {
  const [orderStep, setOrderStep] = useState(1);
  return (
    <>
      <CurrentOrder orderStep={orderStep} />
    </>
  );
};

export default OrderStatus;
