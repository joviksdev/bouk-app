import React from "react";
import './PaymentLoader.css'
const PaymentLoader = ({text}) => {
  return (
    <div class="payment-loader-container">
      <div class="payment-loader">
        <div class="payment-circle">
          <div class="payment-inner-circle"></div>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentLoader;
