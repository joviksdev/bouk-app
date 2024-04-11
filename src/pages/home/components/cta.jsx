import React from "react";
import styled from "@emotion/styled";
import Car from "../../../assets/car.svg";

const CtaSection = styled.section`
  background: linear-gradient(
    to bottom,
    #e0ccff 0%,
    #e0ccff 50%,
    #fff 50%,
    #fff 100%
  );
`;

const Container = styled.div`
  max-width: 1260px;
  padding: 40px 40px;
  //   border: 1px solid red;
  margin: 0 auto;

  @media screen and (max-width: 576px) {
    padding: 40px 20px;
  }
`;

const Join = styled.div`
  font-family: "Oxygen", sans-serif;
  background: #3e236e;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;

  img {
    width: 450px;
  }

  @media screen and (max-width: 996px) {
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    text-align: center;

    img {
      width: 350px;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 20px 15px 0 15px;
    img {
      width: 200px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 50px;
  //   border: 1px solid red;

  h3 {
    color: #ffffff;
    font-family: "Oxygen", sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
  }
  p {
    color: #ffffff;
    font-family: "Oxygen", sans-serif;
    // margin-bottom: 30px;
    max-width: 320px;
    width: 100%;
    // border: 1px solid red;
  }

  a {
    color: #3e236e;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 8px 30px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-top: 50px;
  }

  @media screen and (max-width: 996px) {
    padding-left: 0;
    align-items: center;
    // justify-content: center;

    h3 {
      margin-bottom: 10px;
    }
    a {
      margin-top: 30px;
    }
  }
`;

export default function Cta() {
  return (
    <CtaSection>
      <Container>
        <Join>
          <TextContainer>
            <h3>Join our community</h3>
            <p>
              While creating an avenue for business owners to sell their
              products on the platform.
            </p>
            <a href="https://bio.link/boukofficials">Join Now</a>
          </TextContainer>

          <img src={Car} alt="car" />
        </Join>
      </Container>
    </CtaSection>
  );
}
