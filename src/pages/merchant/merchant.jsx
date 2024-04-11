import React from "react";
import styled from "@emotion/styled";

import Cta from "../home/components/cta";
import Footer from "../../components/Footer";
import Partners from "../home/components/partners";
//import LandingFooter from "../home/components/footer";

import Testimonials from "../home/components/testimonials";
import DrawerAppBar from "../../components/Navbar";
import { ReactComponent as Playstore } from "../../assets/play-store.svg";
import { ReactComponent as Appstore } from "../../assets/apple-store.svg";
import SupportImage from "../../assets/support.png";
import Button from "@mui/material/Button";
import Merchantdetails from "./components/merchantdetails";
const HeadingBackground = styled.div`
  height: 600px;
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(62, 35, 110, 0.7);
`;

const HeaderTextContainer = styled.div`
  padding: 65px 40px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6%;
  span {
    display: block;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    font-family: "Oxygen", sans-serif;
  }
  h4 {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 56px;
    color: #ffffff;
  }
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    line-height: 56px;

    font-family: "Oxygen", sans-serif;
  }

  @media screen and (max-width: 576px) {
    padding: 45px 20px 40px;

    span {
      text-align: start;
      max-width: 300px;
      width: 100%;
      font-size: 33px;
    }

    h1 {
      font-size: 30px;
    }
  }
`;
const Stores = styled.div`
  display: flex;
  padding-top: 3%;
  gap: 30px;
  //   margin: 0 auto;
  width: 100%;
  justify-content: flex-start;
  //   padding-top: 30px;

  .appstore {
    width: 200px;
  }
  .playstore {
    width: 200px;
  }

  @media screen and (max-width: 576px) {
    .appstore {
      width: 170px;
    }
    .playstore {
      width: 170px;
    }
  }
`;
const Container = styled.div`
  max-width: 1260px;
  padding: 10px 40px 40px;
  margin: 0 auto;
  font-family: "Oxygen", sans-serif;

  @media screen and (max-width: 576px) {
    padding: 10px 20px 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 756px) {
    display: none;
  }
`;

const ServiceSection = styled.section`
  padding: 40px 0 10px 0;
  h2 {
    color: #181725;
    font-size: 35px;
    font-weight: 700;
    font-family: "Oxygen", sans-serif;
    text-align: center;
  }
`;

const Customers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 400px;
    width: 100%;
    margin: 50px auto 0;
  }

  @media screen and (max-width: 576px) {
    margin: 40px auto 0;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: #181725;
    font-size: 24px;
    font-weight: 700;
    font-family: "Oxygen", sans-serif;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
    max-width: 400px;
    font-family: "Oxygen", sans-serif;
    color: #5a5f63;
    font-size: 16px;
  }
  button {
    background: #3e236e;
    border-radius: 4px;
    padding: 8px 15px;
    color: #f7f8fb;
    outline: none;
    border: none;
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    text-align: start;
  }
`;

const MerchantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 400px;
    width: 100%;
    margin: 50px auto 0;
  }

  @media screen and (max-width: 576px) {
    margin: 40px auto 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 70px;

  h3 {
    color: #181725;
    font-size: 24px;
    font-weight: 700;
    font-family: "Oxygen", sans-serif;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
    max-width: 400px;
    font-family: "Oxygen", sans-serif;
    color: #5a5f63;
    font-size: 16px;
  }
  button {
    background: #3e236e;
    border-radius: 4px;
    padding: 8px 18px;
    color: #f7f8fb;
    outline: none;
    border: none;
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  @media screen and (max-width: 996px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }

  @media screen and (max-width: 576px) {
    text-align: start;
  }
`;

export default function Merchant() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <DrawerAppBar />
      <HeadingBackground
        style={{
          backgroundImage: `url(
            images/bouk2.png
        )`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Overlay>
          <HeaderTextContainer>
            <h1>Join the Bouk community and<br /> see your business grow with us</h1>
            
            <span>
              People are ordering online more than ever. Be where they are and
              extend your<br /> reach, make more sales, and grow your business by
              partnering with us at bouk.
            </span>
            <Stores>
              <Button
                onClick={(event) =>
                  (window.location.href =
                    "https://apps.apple.com/us/app/bouk/id1623909945")
                }
                startIcon={<Appstore className="appstore" />}
              >
                {" "}
              </Button>
              <Button
                onClick={(event) =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.bouk&hl=en_ZA&gl=US")
                }
                startIcon={<Playstore className="playstore" />}
              >
                {" "}
              </Button>
            </Stores>
          </HeaderTextContainer>
        </Overlay>
      </HeadingBackground>

      <Container>
        <ServiceSection>
          <h2>Why Bouk?</h2>
          <Customers>
            <LeftSection>
              <div>
                <h3>Be seen</h3>
                <p>
                  Bouk assists in introducing new users to your brand. Your
                  business will have a wider audience and a bigger influence
                  that way. Get orders by signing up and uploading your catalog!
                </p>
              </div>
            </LeftSection>
            <ImageContainer>
              <img style={{ width: "70%" }} src="images/boukad2.jpg" />
            </ImageContainer>
          </Customers>

          {/* 2nd */}
          <MerchantContainer>
            <ImageContainer>
              <img
                style={{ width: "70%", height: "" }}
                src="images/boukad.jpg"
              />
            </ImageContainer>
            <RightSection>
              <div>
                <h3>Increase your margins</h3>
                <p>
                  Increase sales of delivery orders while avoiding the costs
                  associated with running a physical store. Focus on supplying
                  the merchandise or materials; the rest will be handled by us.
                </p>
              </div>
            </RightSection>
          </MerchantContainer>

          {/* 3rd */}
          <Customers>
            <LeftSection>
              <div>
                <h3>Professional support whenever you need it</h3>
                <p>
                  We are here to make life more convenient for you. Our customer
                  support team is available around the clock to ensure you are
                  timely attended to and assist you with anything you need.
                </p>
              </div>
            </LeftSection>
            <ImageContainer>
              <img style={{ width: "70%" }} src={SupportImage} />
            </ImageContainer>
          </Customers>
        </ServiceSection>
      </Container>
      <Merchantdetails />
      <Testimonials />
      <Cta />
      <Partners />
      <Footer />
    </div>
  );
}
