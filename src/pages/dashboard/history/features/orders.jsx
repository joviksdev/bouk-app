import * as React from "react";
import styled from "@emotion/styled";
import FormInput from "../../../../components/form-input/form-input";
import { OrdersData } from "../features/data";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { ReactComponent as Bus } from "../../../../assets/bus.svg";

const OrdersContainer = styled.div`
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const FirstSection = styled.div`
  // padding: 0;
`;

const OrdersCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0 0 0;
`;

const StyledOrder = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: 3px solid #6438b0;
  padding: 0 15px;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 14px;
      color: #6438b0;
      font-family: "Oxygen", sans-serif;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      color: #7c7c7c;
      font-family: "Oxygen", sans-serif;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
    font-size: 17px;

    span {
      font-weight: 700;
      font-size: 14px;
      color: #6438b0;
      font-family: "Oxygen", sans-serif;
    }
  }

  & > div:nth-of-type(2) {
    font-weight: 700;
    font-size: 14px;
    color: #181725;
  }
`;

const SectionDivider = styled.div`
  background: #e2e2e2;
  height: 1px;
  width: 92%;
  margin: 0 auto;
`;

const SecondSection = styled.div`
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    background: #fffce5;
    border-bottom: 1px solid #e2e2e2;
    padding: 20px;
    border-radius: 4px 4px 0 0;

    & > div:nth-of-type(1) {
      p {
        font-weight: 700;
        font-size: 15px;
        color: #181725;
        font-family: "Oxygen", sans-serif;
      }

      span {
        font-weight: 700;
        font-size: 12px;
        color: #7c7c7c;

        span {
          font-weight: 400;
          font-size: 12px;
          color: #7c7c7c;
          margin-right: 5px;
        }
      }
    }

    & > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-between;

      & > span:nth-of-type(1) {
        font-weight: 700;
        font-size: 15px;
        color: #181725;
      }

      & > span:nth-of-type(2) {
        font-weight: 700;
        font-size: 12px;
        color: #7c7c7c;
      }
    }
  }

  & > div:nth-of-type(2) {
    padding: 15px 20px;

    & > p:nth-of-type(1) {
      font-weight: 400;
      font-size: 18px;
      color: #181725;
      font-family: "Oxygen", sans-serif;
      padding-bottom: 5px;
    }

    & > span:nth-of-type(1) {
      font-weight: 700;
      font-size: 15px;
      color: #181725;
    }

    & > span:nth-of-type(2) {
      display: block;
      font-weight: 400;
      font-size: 12px;
      color: #7c7c7c;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
    }

    & > p:nth-of-type(2) {
      font-weight: 400;
      font-size: 18px;
      color: #181725;
      font-family: "Oxygen", sans-serif;
      padding-bottom: 5px;
      padding-top: 10px;
    }

    & > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;
      padding: 20px 0;
      border-bottom: 1px solid #e2e2e2;

      div {
        display: flex;
        gap: 15px;
        align-items: center;
      }

      span {
        font-weight: 700;
        font-size: 15px;
        color: #181725;
        font-family: "Oxygen", sans-serif;
      }
    }
  }
`;

const StyledBus = styled.div`
  background: #e0cfff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    & > div:nth-of-type(1) {
      height: 40px;
      width: 40px;
      background: #ccc;
    }

    & > div:nth-of-type(2) {
      p {
        font-weight: 700;
        font-size: 15px;
        color: #181725;
        font-family: "Oxygen", sans-serif;
      }

      span {
        font-weight: 700;
        font-size: 13px;
        color: #7c7c7c;
        font-family: "Oxygen", sans-serif;
      }
    }
  }

  & > div:nth-of-type(2) {
    font-weight: 700;
    font-size: 15px;
    color: #181725;
    font-family: "Oxygen", sans-serif;
  }
`;

const MapSection = styled.div`
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: flex-start !important;
    gap: 10px;
    padding: 0 0 10px 0 !important;
    margin-bottom: 20px;

    span {
      font-weight: 700;
      font-size: 15px !important;
      color: #181725;
      font-family: "Oxygen", sans-serif;
    }
  }
  & > div:nth-of-type(2) {
    height: 300px;
    width: 100%;
    // width: 300px;
    background: #ff;
    border: 1px solid #e2e2e2;
  }
`;

const Orders = () => {
  const [currentView, setCurrentView] = React.useState(1);
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  return (
    <OrdersContainer>
      <FirstSection>
        <div>
          <FormInput placeholder="Search Orders" />
          <OrdersCard>
            {OrdersData.map((order, i) => (
              <>
                <StyledOrder key={i}>
                  <div>
                    <p>{order.SN}</p>
                    <span>{order.date}</span>
                  </div>
                  <div>
                    <span>{order.price}</span>
                    <MdKeyboardArrowRight
                      onClick={() => setCurrentView(order.id)}
                      cursor="pointer"
                    />
                  </div>
                </StyledOrder>
                <SectionDivider />
              </>
            ))}
          </OrdersCard>
        </div>
      </FirstSection>
      <SecondSection>
        {OrdersData.filter((order) => order.id === currentView).map(
          (data, i) => (
            <>
              <div>
                <div>
                  <p>{data.SN}</p>
                  <span>
                    <span>Ordered:</span>
                    {data.date}
                  </span>
                </div>
                <div>
                  <span>{data.price}</span>
                  <span>{data.completed ? "Completed" : "Uncompleted"}</span>
                </div>
              </div>
              {!isMapOpen ? (
                <div>
                  <p>Deliver to</p>
                  <span>{data.name}</span>
                  <span>{data.address}</span>

                  <div>
                    <div>
                      <StyledBus>
                        <Bus />
                      </StyledBus>
                      <span>Track Order</span>
                    </div>
                    <MdKeyboardArrowRight
                      cursor="pointer"
                      onClick={() => setIsMapOpen(true)}
                    />
                  </div>

                  <p> Order Items</p>
                  <ItemsContainer>
                    {data.orderItems.map((item, i) => (
                      <ItemCard>
                        <div>
                          <div />
                          <div>
                            <p>{item.name}</p>
                            <span>{item.weight}</span>
                          </div>
                        </div>
                        <div>{item.price}</div>
                      </ItemCard>
                    ))}
                  </ItemsContainer>
                </div>
              ) : (
                <MapSection>
                  <div>
                    <MdKeyboardArrowLeft
                      cursor="pointer"
                      onClick={() => setIsMapOpen(false)}
                    />
                    <span>Track Order</span>
                  </div>

                  <div>MAP</div>
                </MapSection>
              )}
            </>
          )
        )}
      </SecondSection>
    </OrdersContainer>
  );
};

export default Orders;
