import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CloseIcon from "@mui/icons-material/Close";

import styled from "@emotion/styled";
import { PersonPinCircleOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import FormInput from "../../../components/form-input/form-input";
import {
  initializeTransaction,
  setTransactionPayload,
  setPaymentModal,
} from "../../../redux/transactionSlice";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { setTip } from "../../../redux/orderSlice";
import Btn from "../../../components/btn/btn";
import PaymentLoader from "../../../components/payment-loader/PaymentLoader";
import PaymentModal from "../../../pages/delivery-details-steps/make-payment/PaymentModal";
const TipDriver = ({ setCurrentOrderView, closeModal }) => {
  const [alignment, setAlignment] = React.useState("web");
  const [feedback, setFeedback] = React.useState("");
  const [showOther, setOther] = React.useState(false);

  const { showPaymentModal, loading } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const handleChange = (event, newAlignment) => {
    if(newAlignment == "other") {
         setOther(true)
    }else {
      setAlignment(newAlignment);
      setTip(newAlignment)
    }
   
  };
  const handleFeedback = ({target: { name, value } }) => {
    setFeedback(value);
  };
  const handleOther= ({target: { name, value } }) => {
    setAlignment(value);
    dispatch(setTip(value))
  };

  const { currentDelivery } = useSelector(
    (state) => state.order
  );
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
    text-align: left;
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
  const handleProceed = async () => {

    if( alignment == 'no-tip'){
       alert("Feedback submitted")
    } else {
      if(alignment == "other"){
       
        dispatch(setPaymentModal(true));
      }else{
        dispatch(setTip(alignment))
        dispatch(setPaymentModal(true));
      
      }
      

      // const transactionData = {
      //   deliveryAmount: alignment,
      //   totalAmount: alignment,
      //   type: "delivery",
      //   deliveryId: currentDelivery?.deliveryId,
      // };
      // try {
      //   const transactionres = await dispatch(
      //     initializeTransaction(transactionData)
      //   ).unwrap();
  
      //   if (transactionres.status == "success") {
      //     dispatch(setTransactionPayload(transactionres.data));
      //     dispatch(setPaymentModal(true));
      //     closeModal();
      //   }
      // } catch (err) {
      //   // handle error here
      //   console.error(err);
      // }
    }
    
  };
  return (
    <Container>
      <h6> Tip Driver</h6>
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
          <PersonPinCircleOutlined fontSize="large" />{" "}
        </div>
        <div style={{ textAlign: "center" }}>
          <p> Here users are heard.</p>
          <Rating name="read-only" value={4} readOnly size="large" />
        </div>

        <div>
          <p className="desc">Enter Feedback</p>
          <div style={{}}>
            <FormInput
              type="text"
              name="feedback"
              placeholder="We take feedbacks seriously and use it to continually improve our service."
              value={feedback}
              onChange={handleFeedback}
            />
          </div>
        </div>

        <div>
          <p className="desc">Encourage Driver with a tip.</p>
          <br />
          <ToggleButtonGroup
            size="large"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              sx={{
                color: "#000",
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3E236E",
                },
              }}
              value="other"
            >
              Other
            </ToggleButton>
            <ToggleButton
              sx={{
                color: "#000",
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3E236E",
                },
              }}
              value="4"
            >
              $4
            </ToggleButton>
            <ToggleButton
              sx={{
                color: "#000",
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3E236E",
                },
              }}
              value="10"
            >
              $10
            </ToggleButton>
            <ToggleButton
              sx={{
                color: "#000",
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3E236E",
                },
              }}
              value="no-tip"
            >
              No Tip
            </ToggleButton>
          </ToggleButtonGroup>
          {
            showOther && (
              <FormInput
              type="number"
              name="other"
              placeholder=""
              value={alignment}
              onChange={handleOther}
            />
            )
          }
        </div>

        <div style={{ paddingTop: "20px" }}>
          {" "}
          <Btn
            type="button"
            look="primary-filled"
            onClick={(event) => handleProceed()}
          >
            {" "}
            Submit{" "}
          </Btn>
          {loading === "loading" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2%",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {loading === "failed" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2%",
              }}
            >
              <p>Error Occured, Please try again</p>
            </Box>
          )}
        </div>
      </div>
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          closeModal={() => dispatch(setPaymentModal(false))}
           amount={alignment}
           from="tip"
        />
      )}
    </Container>
  );
};

export default TipDriver;
