import React from "react";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import DrawerAppBar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import emailjs from "@emailjs/browser";
import ColorButton from "../components/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const Contact = () => {
  React.state = {
    name: "",
    message: "",
    email: "",
    number: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };
  const resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      number: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
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
  const formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: React.state.name,
      email: React.state.email,
      message: React.state.message,
      subject: React.state.subject,
    };

    try {
      await emailjs
        .sendForm(
          "service_g2lzerk",
          "template_wmx54jv",
          data,
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
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <DrawerAppBar />
      <Grid sx={{ padding: "5%" , display:' flex' , justifyContent: 'center', alignContent: 'center', alignItems: 'center'}} container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <img
            alt=""
            style={{ width : '80%'}}
            src="images/illustration---no-messages---empty-inbox@1x.svg"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="standard-required"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue=""
              variant="standard"
              size="medium"
              placeholder="Enter your name"
              fullWidth
              value={React.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              style={{ width: '60%', marginBottom: "20px" }}
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue=""
              variant="standard"
              size="medium"
              placeholder="email@example.com"
              fullWidth
              value={React.state.email}
              onChange={(e) => handleChangeEmail(e)}
              error={React.state.emailError}
              style={{ width: '60%', marginBottom: "20px" }}
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={React.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
              variant="standard"
              style={{ width: '60%', marginBottom: "20px" }}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Message"
              placeholder="Enter Message"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              multiline
              rowsMax={4}
              value={React.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              required
              type="text"
              style={{ width: '60%', marginBottom: "70px" }}
            />
            <br />
            <ColorButton width="30%" variant="contained">
              {React.state.buttonText}
            </ColorButton>
          </Box>
        </Grid>
      </Grid>

      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Contact;
