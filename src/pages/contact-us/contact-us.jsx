import React ,{ useRef }from "react";
import styled from "@emotion/styled";
import Partners from "../home/components/partners";
import ContactIllustration from "../../assets/EmptyInbox.svg";

import FormInput from "../../components/form-input/form-input";
import Btn from "../../components/btn/btn";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer";
import DrawerAppBar from "../../components/Navbar";

const ContactUsHeading = styled.div`
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

const ContactSection = styled.div`
  max-width: 1260px;
  padding: 30px 40px 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 850px) {
    display: flex;
  }

  @media screen and (max-width: 576px) {
    padding: 15px 20px 60px;
  }
`;

const FormContainer = styled.form`
  max-width: 500px;
  width: 100%;
  margin: auto 0 auto auto;

  @media screen and (max-width: 850px) {
    margin: 30px auto 0;
  }
`;

const ImageContainer = styled.div`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export default function ContactUs() {
  const [contactDetail, setContactDetail] = React.useState({
    name: "",
    message: "",
    email: "",
    number: "",
    sent: false,
    buttonText: "Send Message",
    Error: "",
  });
  const form = useRef();
  function handleChange({ target: { name, value } }) {
    setContactDetail((prev) => ({ ...prev, [name]: value }));
  }
  const resetForm = () => {
    setContactDetail({
      name: "",
      message: "",
      email: "",
      number: "",
      Error: "",
      buttonText: "Message Sent"
    });

    setTimeout(() => {
      setContactDetail({buttonText: "Send Message" });
    }, 3000);
  };

  const handleChangeEmail = (e) => {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  };

  const formSubmit = async () => {
     
 
    setContactDetail({
      buttonText: "...sending",
    });
    if (
      !contactDetail.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setContactDetail({
        Error: "Invalid email",
      });
    } else {
      let data = {
        name: contactDetail.name,
        email: contactDetail.email,
        message: contactDetail.message,
        number: contactDetail.number,
      };

      try {
        await emailjs
          .sendForm(
            "service_g2lzerk",
            "template_wmx54jv",
            form.current,
            "P3dm-oUeTOytiDqI3"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

          resetForm();
  
      } catch (error) {
        setContactDetail({
          buttonText: "Send Message",
          Error: "Error sending message, please try again",
        });
        console.log(error);
      }
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <DrawerAppBar />
        <ContactUsHeading>
          <div>
            <h1>Contact Us</h1>
          </div>
        </ContactUsHeading>
        <ContactSection>
          <ImageContainer>
            <img
              src={ContactIllustration}
              alt="contact"
              style={{ width: "90%" }}
            />
          </ImageContainer>
          <FormContainer>
            <form ref={form}  >
              <FormInput
                label="Name"
                type="text"
                name="name"
                placeholder="Your name"
                value={contactDetail.name}
                onChange={handleChange}
                // value={userDetails.name}
                // onChange={handleChange}
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={contactDetail.email}
                onChange={handleChange}

                // value={userDetails.email}
                // onChange={handleChange}
              />
              <FormInput
                label="Phone"
                type="number"
                name="number"
                placeholder=""
                value={contactDetail.number}
                onChange={handleChange}
                // value={userDetails.phoneNumber}
                // onChange={handleChange}
              />

              <FormInput
                label="Message"
                type="text"
                name="message"
                placeholder="Enter your message"
                value={contactDetail.message}
                onChange={handleChange}
                // value={userDetails.name}
                // onChange={handleChange}
              />

              <Btn
                type="button"
                look="primary-filled"
                onClick={() => formSubmit()}
              >
                {contactDetail.buttonText}
              </Btn>
              <span> {contactDetail.Error}</span>
            </form>
          </FormContainer>
        </ContactSection>
        <Partners />
        <Footer />
      </div>
    </>
  );
}
