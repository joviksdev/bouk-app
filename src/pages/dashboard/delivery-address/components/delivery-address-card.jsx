import * as React from "react";
import styled from "@emotion/styled";
import EditAddress from "../features/edit-address";
import { BiTrash } from "react-icons/bi";

const CardContainer = styled.div`
  background: #fff;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #181725;
    font-size: 16px;
    font-weight: 700;
    font-family: "Oxygen", sans-serif;
  }

  span {
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Default = styled.div`
  color: #3e236e;
  font-size: 10px;
  font-weight: 700;
  border: 1px solid #e0cfff;
  padding: 2px 5px;
  border-radius: 16px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #3e236e;
    font-size: 15px;
    font-weight: 700;

    span {
      cursor: pointer;
    }
  }
`;

const Use = styled.span`
  color: #e0cfff;
`;

const SectionDivider = styled.div`
  background: #e2e2e2;
  height: 1px;
  width: 100%;
  margin: 10px 0;
`;

const DELIVERY_ADDRESS_ACTIONS = Object.freeze({
  EDIT_ADDRESS: "EDIT_ADDRESS",
});

function reducer(state, action) {
  switch (action.type) {
    case DELIVERY_ADDRESS_ACTIONS.EDIT_ADDRESS:
      return {
        currentAction: DELIVERY_ADDRESS_ACTIONS.EDIT_ADDRESS,
      };

    case "close_dialog":
      return { currentAction: null };

    default:
      throw new Error("Invalid edit action");
  }
}

export default function DeliveryAddressCard({ data }) {
  const [{ currentAction }, dispatch] = React.useReducer(reducer, {
    currentAction: null,
  });

  const closeActionDialog = () => {
    dispatch({ type: "close_dialog" });
  };

  return (
    <>
      <CardContainer>
        <TopSection>
          <div>
            <p>{data.name}</p>
            <span>{data.address}</span>
            <span>{data.phone}</span>
          </div>
          <Default>Default </Default>
        </TopSection>
        <SectionDivider></SectionDivider>
        <BottomSection>
          <div>
            <BiTrash fontSize={18} cursor="pointer" />
            <span
              onClick={() => {
                dispatch({
                  type: DELIVERY_ADDRESS_ACTIONS.EDIT_ADDRESS,
                  payload: null,
                });
              }}
            >
              Edit
            </span>
          </div>

          <Use>Use this address</Use>
        </BottomSection>
      </CardContainer>

      {currentAction === DELIVERY_ADDRESS_ACTIONS.EDIT_ADDRESS && (
        <EditAddress isOpen={true} onCancel={closeActionDialog} />
      )}
    </>
  );
}
