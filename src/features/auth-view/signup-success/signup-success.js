import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Confetti } from "../../../assets/confetti.svg";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;

  p {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #181725;
    margin-top: 1rem;
  }

  span {
    font-family: "Oxygen", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #7c7c7c;
  }
`;

const SignUpSuccess = () => {
  return (
    <SuccessContainer>
      <Confetti />
      <p>Registration Successful</p>
      <span>Redirecting you to your delivery request...</span>
    </SuccessContainer>
  );
};

export default SignUpSuccess;
