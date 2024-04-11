import React from "react";
import styled from "@emotion/styled";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Partners from "../home/components/partners";
import Footer from "../../components/Footer";
import DrawerAppBar from "../../components/Navbar";

const FaqHeading = styled.div`
  background: #3e236e;

  div {
    max-width: 1260px;
    padding: 20px 40px;
    margin: 0 auto;

    h1 {
      font-size: 30px;
      color: #ffffff;
      font-weight: 700;
      font-family: "Oxygen", sans-serif;
    }
  }

  @media screen and (max-width: 576px) {
    div {
      padding: 15px 20px;

      h1 {
        font-size: 22px;
      }
    }
  }
`;

const FaqSection = styled.div`
  max-width: 1260px;
  padding: 15px 40px 80px;
  margin: 0 auto;

  @media screen and (max-width: 576px) {
    padding: 15px 20px 60px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 30px;

  div {
    padding: 10px 15px;
    color: #181725;
    font-weight: 700;
    font-size: 17px;
    font-family: "Oxygen", sans-serif;
    cursor: pointer;
    // transition: all 0.3s ease;
  }

  .tab_active {
    color: #6438b0;
    border-bottom: 3px solid #6438b0;
  }
`;

const FaqBox = styled.div`
  background: #f7f8fb;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  padding: 10px 16px;
  margin-bottom: 15px;

  span {
    color: #7c7c7c;
    font-size: 15px;
    padding-right: 60px;
    display: block;
  }

  @media screen and (max-width: 576px) {
    span {
      padding-right: 0;
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;

  p {
    color: #181725;
    font-weight: 700;
    font-size: 18px;
    font-family: "Oxygen", sans-serif;
  }

  div {
    display: flex;
    cursor: pointer;
  }
`;

const FAQ_TYPE = Object.freeze({
  CUSTOMER: { label: "Customers & Merchants", value: "CUSTOMER" },
  BOUKER: { label: "Boukers", value: "BOUKER" },
});

const boukerData = [

  {
    question: "How do I become a bouker?",
    answer: `The steps to become a bouk driver (booker) are lenient and easy. Follow the steps below and lets help you make money while working on your own terms`,
    answerList: [
      "Open the mobile app or web page and click on become a driver (bouker)",
      "Provide your full name, phone number and email address.",
      "You will receive and OTP and you proceed to create your account",
      "Kindly proceed to providing your driver’s license and register your mode of delivery (bike, car, or truck) ",
      "Now give us a few days for verification and your account will be activated.",
 
    ],
    
  },
  {
    question: "How long does it take to sign up?",
    answer: "It takes approximately two minutes to sign up.",
  },
  {
    question: "How do I receive payment?",
    answer: "Bouk will make payments weekly to your provided account.",
  },
  {
    question: "How much is bouk’s service charge?",
    answer: "Bouk charges a minor standard $2.10 as service fee for users",
  },
  {
    question: "How much commission does Bouk take? ",
    answer: "Bouk takes a very small amount of 12.5% commission from its drivers",
  },
  {
    question: "How often is pay day?",
    answer: "Bouk ensures its boukers are promptly paid every weekend",
  },
  {
    question: "How often is pay day?",
    answer: "Bouk ensures its boukers are promptly paid every weekend",
  },
  {
    question: "what kind of items does bouk deliver?",
    answer: "Bouk delivers and pick-up a long range of items consisting of but not limited to household items (such as couch, chairs, tv), clothes, shoes, groceries, food, plants, laptops, electric appliances, and letters/mails",
  },
  {
    question: "what kind of items does bouk deliver?",
    answer: "Bouk delivers and pick-up a long range of items consisting of but not limited to household items (such as couch, chairs, tv), clothes, shoes, groceries, food, plants, laptops, electric appliances, and letters/mails",
  },
];

const customerData = [
  {
    question: "How do I make payment on Bouk? ",
    answer:
      "After entering your request details, your card details will be requested to enable and confirm payment. ",
  },
  {
    question:
      "Can I request a pick-up and delivery without shopping through bouk?",
    answer:
      "Yes, you can request pick up and delivery without shopping on our platforms.",
  },
  {
    question:
      "How do I contact Bouk? ",
    answer:
      "You can contact bouk through our customer support service on contact@boukofficials.com .",
  },
  {
    question:
      "Is Bouk Available throughout America? ",
    answer:
      "Bouk is presently not operational throughout the United States, but we are working to expand rapidly in the nearest future.",
  },
  {
    question:
      "Can I request to have my garden tools or items delivered?",
    answer:
      "Yes, at bouk we ensure that there is a delivery means (bouker/vehicle) for every item one intends to deliver.",
  },
  {
    question:
      "How does Bouk calculate its price? ",
    answer:
      "Bouk considers a variety of factors such as Weight, and distance when calculating price. Prices are calculated by multiplying the distance ($0.95 per mile) plus the weight ($0.38 per pound), as well as any applicable fees (service fee $2.10) and taxes. Distance will be calculated only once for multiple items on a single request.",
  },
  {
    question: "How does Exchange request work?",
    answer: `So, if a customer has an exchange request, he can follow the steps below
       `,
    answerList: [
      "start by entering your address under “pick up at” ",
      "enter the address for the drop-off location under “dropped off”",
      "Provide item description, weight, and a note if you deem fit",
      " Tick if it’s an item delivery or pick-up and upload receipt",
      "Proceed to payment to confirm and send request",
      "Click on done and sit back while we take it from there ",
    ],
    extra:
      "If you are requesting a pickup from a shop, follow the same instruction above, but please remember to upload your online receipt from your store, if your product was not purchased using our platform. We ask for the receipt, so the drivers have no issue picking up your product. Which will allow you to receive your product with ease.",
  },
  {
    question: "How do I open a shop?",
    answer: `Opening a shop and becoming a merchant is a very easy and hassle-free process on bouk. Kindly follow the steps below
       `,
    answerList: [
      "Open the mobile app or web page and click on sign up",
      "Proceed to provide your name, phone number, email address, and password",
      "An OTP will be sent to the mobile number provided, enter this and your account will be up",
      " Click on become a merchant",
      "Proceed to provide store name, address, and image",
      "Finally click on register and your store will be up",
      "You can now proceed to upload your items, fill in description and prices",
    ],
  },
  {
    question: "How do I make payment on Bouk? ",
    answer:
      "After entering your request details, your card details will be requested to enable and confirm payment. ",
  },
  {
    question: "Does bouk use third party navigations?",
    answer: "Yes, bouk drivers use third party navigations like google map.",
  },
  {
    question: "How do I request a delivery pick-up or drop-off?",
    answer: `If you are requesting for an item to be picked up from a location (home, shop or an address), kindly follow the steps below`,
    answerList: [
      "start by entering your address under pick up at",
      "enter the address for the drop-off location under dropped off.",
      "Provide item description, weight, and a note if you deem fit",
      "Tick if it’s an item delivery or pick-up and upload receipt",
      "Proceed to payment to confirm and send request",
      "Click on done and sit back while we take it from there ",
    ],
    extra:
      "If you are requesting a pickup from a shop, follow the same instruction above, but please remember to upload your online receipt from your store, if your product was not purchased using our platform. We ask for the receipt, so the drivers have no issue picking up your product. Which will allow you to receive your product with ease.",
  },
  {
    question: "How do I contact the driver, delivering my item?",
    answer:
      "Most of the times our customers don’t really have a need to contact the driver, however, the drivers contact will be provided to you just incase we have a situation or change of plans.",
  },
  {
    question: "Are all your products new and unused? ",
    answer:
      "bouk merchants offer new products. However, some sellers do offer refurbished items for resell at a competitive price. In such a situation, the seller will clearly state the condition of the product.",
  },
  {
    question: "Is there a line for elder to call to place order for them? ",
    answer:
      "We currently do not have designated lines specifically for elders and older people, but the web and app are very easy to navigate, and they might find it easy to use",
  },
  {
    question: "Do we need to box everything before shipping with Bouk?",
    answer:
      "No, all your packages do not need to be box, but we do ask that they are well organize, smaller items that can be place in bags or box or your desire package should be place in such and recommend tagging them. For bigger items, we do recommend tagging them as well, for our driver may be carrying other customers packages as well. ",
  },
  {
    question: "How old must I be to use bouk service?",
    answer:
      "Using the bouk platform to request for delivery pick-up or drop-off has not age restrictions. However, for certain items like alcohol the driver may request to see an Id before dropping it off. ",
  },
  {
    question: "can I use bouk for food/groceries pick up? ",
    answer:
      "Yes. Although bouk is not a strictly food delivery platform, we do accept request for food and restaurant pick-ups ",
  },
  {
    question: "Can I request delivery or pick-up for big items like fridge/bed/table, couch etc.?",
    answer:
      "Yes, you can. However, we do ask that you bear with us when you request shipping with us for item that big, because we are a newly launched company, we may not have as many contractors with big enough vehicles to immediately take up your request. ",
  },
  {
    question: "If I’m hosting my shop on Bouk do I get free shipping?",
    answer:
      "No, sadly you do not get free shipping on Bouk. If your customer does not request us, then you will pay if you need your product delivered.",
  },
  {
    question: "Can I use Bouk to request a package drop off from my house to the post office?",
    answer:
      "Yes, we will pick up your package and have it dropped off at your local post office and more. We are here to convenience you. ",
  },
  {
    question: "Does Bouk accept interstate request?",
    answer:
      "Bouk does not accept interstate request currently, however if you are close enough to the border, we might accept your request for the neighboring state. If the distance is reasonable.",
  },
  {
    question: "Do I need a physical shop to open my shop small business shop on Bouk?",
    answer:
      "No, you do not need to have a physical, store to host your shop on bouk. You will however be required to upload a picture of your store. So, for that we recommend uploading a photo that represents your business to help your shop be more appealing.",
  },
  {
    question: "Can I request movers on Bouk? ",
    answer:
      "Unfortunately, no, because Bouk is not a moving platform",
  },
  {
    question: "Do I get charge for cancelling a request after it’s been picked up? ",
    answer:
      "If a bouker has picked-up an item for delivery, yes, the customer will be charged for cancellation because the bouker will be required to return the item to its pickup point.",
  },
];

export default function Faqs() {
  const [currentTab, setCurrentTab] = React.useState(FAQ_TYPE.CUSTOMER.value);
  const [currentView, setCurrentView] = React.useState(0);
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <DrawerAppBar />
        <FaqHeading>
          <div>
            <h1>FAQs</h1>
          </div>
        </FaqHeading>
        <FaqSection>
          <TabContainer>
            {Object.values(FAQ_TYPE).map(({ label, value }, i) => {
              return (
                <div
                  key={i}
                  className={currentTab === value ? "tab_active" : ""}
                  onClick={() => setCurrentTab(value)}
                >
                  {label}
                </div>
              );
            })}
          </TabContainer>

          <div>
            {currentTab === FAQ_TYPE.CUSTOMER.value ? (
              <div>
                {customerData?.map((data, i) => (
                  <FaqBox key={i}>
                    <Top>
                      <p>{data.question}</p>

                      <div onClick={() => setCurrentView(i + 1)}>
                        {currentView !== i + 1 && (
                          <MdKeyboardArrowDown fontSize={30} color="#323232" />
                        )}

                        {currentView === i + 1 && (
                          <MdKeyboardArrowUp fontSize={30} color="#323232" />
                        )}
                      </div>
                    </Top>
                    {currentView === i + 1 && (
                      <>
                        <span style={{ marginBottom: "8px" }}>
                          {data.answer}
                        </span>
                        {data.answerList?.map((item, i) => (
                          <span key={i}>
                            {i + 1}. {item}
                          </span>
                        ))}
                      </>
                    )}
                  </FaqBox>
                ))}
              </div>
            ) : (
              <div>
                {boukerData?.map((data, i) => (
                  <FaqBox key={i}>
                    <Top>
                      <p>{data.question}</p>

                      <div onClick={() => setCurrentView(i + 1)}>
                        {currentView !== i + 1 && (
                          <MdKeyboardArrowDown fontSize={30} color="#323232" />
                        )}

                        {currentView === i + 1 && (
                          <MdKeyboardArrowUp fontSize={30} color="#323232" />
                        )}
                      </div>
                    </Top>
                    {currentView === i + 1 && (
                      <>
                        <span style={{ marginBottom: "8px" }}>
                          {data.answer}
                        </span>
                        {data.answerList?.map((item, i) => (
                          <span key={i}>
                            {i + 1}. {item}
                          </span>
                        ))}
                        {data.extra && (
                          <span style={{ marginTop: "8px" }}>{data.extra}</span>
                        )}
                      </>
                    )}
                  </FaqBox>
                ))}
              </div>
            )}
          </div>
        </FaqSection>
        <Partners />
        <Footer />
      </div>
    </>
  );
}
