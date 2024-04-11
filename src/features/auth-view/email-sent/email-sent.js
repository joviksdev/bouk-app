import React from "react";
import styled from "@emotion/styled";
import { AUTH_VIEW } from "../enum";
import Btn from "../../../components/btn/btn";
import { ReactComponent as Confetti } from "../../../assets/confetti.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 3rem;

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
    margin-bottom: 2rem;
  }
`;

const EmailSent = ({ setCurrentAuthView }) => {
  return (
    <Container>
      <Confetti />
      <p>Email Sent!</p>
      <span>A reset password link has been sent to your email</span>
      <Btn
        type="button"
        look="primary-filled"
        onClick={() => setCurrentAuthView(AUTH_VIEW.SIGNIN.value)}
      >
        Done
      </Btn>
    </Container>
  );
};

export default EmailSent;
