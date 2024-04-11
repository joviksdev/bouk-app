import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Btn from "../../../components/btn/btn";
import DoneIcon from "@mui/icons-material/Done";
import OrderView from "../../../features/order-view/orderView";
const Container = styled.div`
  padding: 10px 25px 30px;
  font-family: "Oxygen", sans-serif;

  h6 {
    color: #181725;
    font-size: 24px;
    font-weight: 700;
    font-family: inherit;
  }
  .innerContainer {
    display: flex,
    flex-direction: column;
    justify-content: space-between;
    alignItems: center;
  }
  p {
    font-family: 'Oxygen';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
 padding-top: 20px;

text-align: center;

color: #181725;
  }
  .desc {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  
  .forgot-password {
    color: #6438b0;
    font-family: "Oxygen", sans-serif;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    float: right;
    margin-bottom: 15px;
  }
`;
const Bottom = styled.div`
  display: flex;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  p {
    margin-bottom: 5px;
    margin-top: 0;
    font-weight: 700;
    font-size: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    font-family: "Oxygen", sans-serif;
    color: #7c7c7c;
    margin-top: 2px;
    line-height: 18px;
  }
`;
const Summary = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;

  p {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: #7c7c7c;
  }
`;
const PaymentSummary = ({
  amount,
  serviceCharge,
  userName,
  increaseStep,
  from,
  closeModal,
  driverName
}) => {
  const [isTipOpen, toggleTipModal] = React.useState(false);
  const [test, setTest] = React.useState(false);
  console.log("summary", from)
  console.log("amount", amount)
  console.log("charge", serviceCharge)
  return (
    <Container>
      <h6> Payment Summary</h6>
      <hr />
      <div className="innerContainer">
        <div
          style={{
            backgroundColor: "#E0CFFF",
            width: "80px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "60px",
            alignItems: "center",
            alignSelf: "center",
            margin: "0 auto",
          }}
        >
          {" "}
          <DoneIcon fontSize="large" />{" "}
        </div>

        <Summary>
          <div>
            <p>{userName}</p>
            <br />
            <span>Payment Completed</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Bottom>
              <Person>
                <p>Amount:</p>
              </Person>
            </Bottom>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
             

              <p style={{ marginTop: "auto" }}>Amount: {amount}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Bottom>
              <Person>
                <p>Service Charge:</p>
              </Person>
            </Bottom>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
               

              <p style={{ marginTop: "auto" }}> {serviceCharge}</p>
            </div>
          </div>

          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Bottom>
              <Person>
                <p>Total:</p>
              </Person>
            </Bottom>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              
              {from == "tip" && (
                <p style={{ marginTop: "auto" }}>
                {" "}
                ${amount}
              </p>
              )}
              {from == "delivery" && (
                <p style={{ marginTop: "auto" }}>
                {" "}
                ${(amount + parseFloat(serviceCharge)).toFixed(2)}
              </p>
              )}
           
            </div>
          </div>
          <div style={{ display: " flex", justifyContent: "center" }}>
            <Btn
              type="button"
              look="primary-filled"
              onClick={() => {
                console.log("next", from)
                if (from == "delivery") {
                    increaseStep();
                    closeModal();
                 
                } else {
                    toggleTipModal(true)
                    setTest(true)
                    console.log(isTipOpen)
                    console.log(test)
                    //closeModal()
                    
                }
              }}
            >
              {" "}
              Proceed
            </Btn>
          </div>
        </Summary>
      </div>
      {isTipOpen && (
        <OrderView
          isOpen={isTipOpen}
          closeModal={() => toggleTipModal(false)}
          exact="DRIVER_TIPPED"
          name={driverName}
        />
      )}
    </Container>
  );
};

export default PaymentSummary;
