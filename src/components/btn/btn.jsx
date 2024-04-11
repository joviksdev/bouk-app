import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  outline: none !important;
  width: 100%;
  padding: 11px 15px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.look === "primary-filled"
      ? "#3E236E"
      : props.look === "tertiary-filled"
      ? "#E0CFFF"
      : "#fff"};
  color: ${(props) =>
    props.look === "primary-filled"
      ? "#fff"
      : props.look === "tertiary-filled"
      ? "#3E236E"
      : "#3E236E"};
`;

const Btn = ({ children, type, look, onClick, disabled }) => {
  return (
    <Button type={type} look={look} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default Btn;
