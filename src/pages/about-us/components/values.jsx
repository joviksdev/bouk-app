import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #f7f8fb;
`;

const ValuesContainer = styled.div`
  max-width: 1260px;
  padding: 55px 40px 50px;
  margin: 0 auto;
  font-family: "Oxygen", sans-serif;

  h3 {
    font-weight: 700;
    font-size: 25px;
    color: #181725;
    font-family: "Oxygen", sans-serif;
    text-align: center;
  }

  p {
    color: #5a5f63;
    font-size: 15px;
    font-family: "Oxygen", sans-serif;
  }

  @media screen and (max-width: 576px) {
    padding: 50px 20px;
  }
`;

const Intro = styled.p`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 45px;
  text-align: center;
`;

const ValueList = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    padding: 0 30px;
    h4 {
      font-weight: 700;
      font-size: 20px;
      color: #181725;
      margin-bottom: 10px;
      font-family: "Oxygen", sans-serif;
    }

    p {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 576px) {
    div {
      padding: 0;
    }
  }
`;

export default function Values() {
  return (
    <Container>
      <ValuesContainer>
        <h3>What we value the most</h3>
        <Intro>
          We cannot lose sight of our values in our endeavor to satisfy our
          customers. It is the lifeblood and driving force of our company and
          platform. This helps us make customer-centric decisions and maintains
          the long-term relationship we have built with our customers.
        </Intro>
        <ValueList>
          <div>
            <h4>Customer first</h4>
            <p>
              We live and breathe for our consumers and users, which is why
              providing them with a personalized, seamless experience is what
              keeps us afloat.
            </p>
            <p>
              The customer is the center of attention at bouk. It is everyone’s
              obligation to provide excellent customer service here.
            </p>

            <p>
              Because we value our customers, our boukers prioritize prompt
              delivery when they pick up.
            </p>
          </div>

          <div>
            <h4>Obsession with quality and honesty</h4>
            <p>
              We have built a platform where everyone can come to sell and buy.
              It is essential that our merchants provide customers with quality
              products and honest descriptions.
            </p>
          </div>

          <div>
            <h4>Growth mindset</h4>
            <p>
              We at bouk are always acquiring fresh information and learning
              from our customers. We will not stop looking for ways to make our
              customers happy.
            </p>
            <p>
              We are building a firm that has never been established before, and
              in order to thrive, we must never stop evolving; join us and
              experience the growing rewards.
            </p>
          </div>
        </ValueList>
      </ValuesContainer>
    </Container>
  );
}
