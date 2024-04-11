import * as React from "react";
import styled from "@emotion/styled";

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

const HelpContainer = styled.div`
  padding: 20px 30px;
`;

const HelpCard = styled.div`
  max-width: 400px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-family: "Oxygen", sans-serif;
  padding: 15px 0 15px 0;
  display: flex;
  flex-direction: column;

  p {
    a {
      padding-left: 15px;
      font-weight: 700;
      font-size: 16px;
      color: #181725;
      font-family: "Oxygen", sans-serif;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }

  .active_help {
    border-right: 3px solid #6438b0;
    a {
      color: #6438b0;
    }
  }
`;

const SectionDivider = styled.div`
  background: #e2e2e2;
  height: 1px;
  width: 92%;
  margin: 15px auto;
`;

const DashboardAbout = () => {
  const [currentView, setCurrentView] = React.useState(1);

  return (
    <>
      <SectionHeader>
        <h2>About</h2>
      </SectionHeader>
      <HelpContainer>
        <HelpCard>
          <p
            onClick={() => setCurrentView(1)}
            className={currentView === 1 ? "active_help" : ""}
          >
            <a href="/termsandConditions" target="blank">
              Terms and Conditions
            </a>
          </p>

          <SectionDivider />
          <p
            onClick={() => setCurrentView(2)}
            className={currentView === 2 ? "active_help" : ""}
          >
            <a href="/UserPrivacyPolicy" target="blank">
              Privacy
            </a>
          </p>

          <SectionDivider />
          <p
            onClick={() => setCurrentView(3)}
            className={currentView === 3 ? "active_help" : ""}
          >
            <a href="/about" target="blank">
              Delivery Locations
            </a>
          </p>
        </HelpCard>
      </HelpContainer>
    </>
  );
};

export default DashboardAbout;
