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
import Downloaditems from "./components/downloaditems";
import Downloaddetails from "./components/downloaddetails";
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
const Mission = styled.div`
  background: #f7f8fb;
  text-align: center;
  padding: 70px 20px;

  h2 {
    color: #181725;
    font-size: 35px;
    font-weight: 700;
    font-family: "Oxygen", sans-serif;
  }

  p {
    max-width: 700px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
    color: #5a5f63;
    font-size: 16px;
    font-family: "Oxygen", sans-serif;
  }

  @media screen and (max-width: 576px) {
    padding: 40px 20px;
  }
`;

export default function Download() {
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
            <h1>No hidden fees</h1>
            <h4> An easy and reliable way to send and receive items</h4>
            <span>
              We live and breathe for our consumers and users, which is why
              providing them<br /> with a personalized, seamless experience is what
              keeps us afloat.
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
      <Mission>
        <h2>Bouk</h2>
        <p>
          Building a future where one platform solves all your delivery and
          shopping problems because there is a delivery person for every item no
          matter the size or weight.
        </p>
      </Mission>
    
      <Downloaditems />
      <Downloaddetails />
      <Testimonials />
      <Cta />
      <Partners />
      <Footer />
    </div>
  );
}
