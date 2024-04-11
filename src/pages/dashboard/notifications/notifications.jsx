import * as React from "react";
import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";

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

const NotificationsContainer = styled.div`
  padding: 20px 30px;
`;

const NotificationsCard = styled.div`
  max-width: 500px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-family: "Oxygen", sans-serif;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    display: flex;
    align-items: start;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 14px;
      color: #181725;
      font-family: "Oxygen", sans-serif;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      color: #7c7c7c;
    }
  }
`;

const Notifications = () => {
  return (
    <>
      <SectionHeader>
        <h2>Notifications</h2>
      </SectionHeader>
      <NotificationsContainer>
        <NotificationsCard>
          {/* email */}
          <div>
            <div>
              <p>Email</p>
              <span>Receive email notifications on my delivery requests</span>
            </div>
            <Switch
              // checked={checked}
              // onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          {/* push notifications */}
          <div>
            <div>
              <p>Push Notifications</p>
              <span>Receive push notifications on my delivery requests</span>
            </div>
            <Switch
              // checked={checked}
              // onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          {/* sms */}
          <div>
            <div>
              <p>SMS</p>
              <span>Receive sms notifications on my delivery requests</span>
            </div>
            <Switch
              // checked={checked}
              // onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </NotificationsCard>
      </NotificationsContainer>
    </>
  );
};

export default Notifications;
