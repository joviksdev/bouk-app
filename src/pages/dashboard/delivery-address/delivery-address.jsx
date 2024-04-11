import React from "react";
import styled from "@emotion/styled";
import DeliveryAddressCard from "./components/delivery-address-card";
import Btn from "../../../components/btn/btn";
import AddAddress from "./features/add-address";

const SectionHeader = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #e2e2e2;

  h2 {
    font-weight: 700;
    font-size: 20px;
    font-family: "Oxygen", sans-serif;
    margin-bottom: 0;
  }
`;

const AddressCardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 20px 30px;
  gap: 20px;

  @media screen and (max-width: 1100px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const StyledBtn = styled.div`
  padding: 10px 30px;
  display: flex;

  button {
    width: 49%;
  }
`;

const DELIVERY_ADDRESS_ACTIONS = Object.freeze({
  ADD_ADDRESS: "ADD_ADDRESS",
});

function reducer(state, action) {
  switch (action.type) {
    case DELIVERY_ADDRESS_ACTIONS.ADD_ADDRESS:
      return {
        currentAction: DELIVERY_ADDRESS_ACTIONS.ADD_ADDRESS,
      };

    case "close_dialog":
      return { currentAction: null };

    default:
      throw new Error("Invalid edit action");
  }
}


const data = [
  {
    name: "Themba",
    address: "UJ APK Madibeng, Corner Kingsway and University Road, Auckland Park, Johannesburg, South Africa",
    phone: "08077887788",
  },
  {
    name: "test user",
    address: "No 5 Olorunkemi street, Ikorodu Street",
    phone: "08077887788",
  },
];

const DeliveryAddress = () => {
  const [{ currentAction }, dispatch] = React.useReducer(reducer, {
    currentAction: null,
  });
  
  const closeActionDialog = () => {
    dispatch({ type: "close_dialog" });
  };
  return (
    <>
      <div>
        <SectionHeader>
          <h2>Delivery Address</h2>
        </SectionHeader>
        <AddressCardsContainer>
          {data.map((item, i) => (
            <DeliveryAddressCard data={item} key={i} />
          ))}
        </AddressCardsContainer>
        <StyledBtn>
          <Btn
            type="button"
            look="tertiary-filled"
            onClick={() => {
              dispatch({
                type: DELIVERY_ADDRESS_ACTIONS.ADD_ADDRESS,
                payload: null,
              });
            }}
          >
            Add new address
          </Btn>
        </StyledBtn>
      </div>

      {currentAction === DELIVERY_ADDRESS_ACTIONS.ADD_ADDRESS && (
        <AddAddress isOpen={true} onCancel={closeActionDialog} />
      )}
    </>
  );
};

export default DeliveryAddress;
