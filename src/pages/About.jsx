import React from "react";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ColorButton from "../components/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <div>
      {/* <Navbar />

      <Box
        sx={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          objectFit: "cover",
          background: `url(${"images/unsplash-q-sei-tqslc@1x.png"}) `,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            opacity: "0.6",
            backgroundColor: "#3E236E",
          }}
        ></div>
      </Box>
      <Box sx={{ display: "flex", textAlign: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            left: { xs: "10%", sm: "30%" },
            top: "20%",
            color: "#fff",
            position: "absolute",
          }}
        >
          Avoid the trip Leave it to us
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            left: "5%",
            top: { xs: "45%", sm: "30%", md: "30%" },

            color: "#fff",
            position: "absolute",
          }}
        >
          About Us
        </Typography>
      </Box>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Box>
        <Grid container>
          <Grid
            sx={{
              padding: "5%",
              textAlign: { xs: "center", sm: "left", md: "left" },
            }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Typography variant="h3" gutterBottom>
              Who we are
            </Typography>
            <Typography>
              bouk is an item or delivery pick-up, and drop-off web and mobile
              application platform, that connects people with pick-up and
              delivery drivers (boukers). What it does is, it connects people to
              people (friends, loved ones, family, and sellers) and people to
              stores vice versa using trusted pick-up and delivery drivers
              (boukers) from our platform who reliably transport your items from
              friends, relatives, or shops to you and from you to them in record
              time. We also bridge the gap between big retailers, local
              businesses, and consumers by providing a single platform that
              enables everyone to sell and get deliveries at record time. Bouk
              provides you with the convenience of shopping from anywhere and
              saves you the hassle of running to the sho
            </Typography>
          </Grid>
          <Grid
            sx={{
              padding: "2%",
              alignContent: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
            item
            xs={12}
            sm={4}
            md={4}
          >
            <img
              style={{ width: "80%", objectFit: "cover", borderRadius: 10 }}
              src="images/dsc00136-1@2x.png"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "400px",
          backgroundColor: "#F7F8FB",
        }}
      >
        <Grid container>
          <Grid sx={{ padding: { xs : '2%'}}} item xs={12} sm={12} md={12}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
              Our Mission
            </Typography>{" "}
            <br />
            <Typography sx={{ width: '50%', textAlign: "center" , margin: '0 auto' }}>
              To build a future where one platform solves all your delivery and
              shopping problems because there is a delivery person for every
              item no matter the size or weight.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", marginTop: "2%" }}
        >
          Who we serve
        </Typography>
        <Grid
          sx={{
            padding: "1%",
            display: "flex",
            justifyContent: "space-between",
          }}
          container
          spacing={3}
        >
          <Grid
            sx={{
              padding: "5%",
              position: "relative",
              left: { sm: "15%", md : '15%'},
              alignSelf: "center",
              textAlign: { xs: 'center'}
            }}
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Typography variant="h3" gutterBottom>
              Customers
            </Typography>
            <Typography sx={{ marginTop: "5%" }}>
              With access to thousands of boukers who own different sizes of
              bikes, vehicles, and trucks,you can request delivery of different
              items and track your delivery in real time.
              <br /> <br /> <br />
              Also with your favorite convenience stores, pet stores, grocery
              stores, local stores and more at your fingertips for shopping,
              bouk delivers all items in record time.
            </Typography>
            <ColorButton width="35%" sx={{ marginTop: "5%" }}>
              {" "}
              Start an order
            </ColorButton>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{  width: '70%', height: "" }}
              src="images/about1.jpg"
            />
          </Grid>
          <Grid
            sx={{ marginTop: "3%", position: "relative", left: { sm : "15%", md: "15%"} }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <img
              style={{  width: '50%',  }}
              src="images/about2.jpg"
            />
          </Grid>
          <Grid
            sx={{
              marginTop: "3%",
              position: "relative",
              right: "15%",
              alignSelf: "center",
              textAlign: { xs: 'center'}
            }}
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Typography variant="h3" gutterBottom>
              Merchant
            </Typography>
            <Typography sx={{ marginTop: "5%" }}>
              Attract and retain new customers, keep your store in the face of
              customers, and expand your business by offering direct online
              shopping, delivery, and pickup with bouk.
            </Typography>
            <ColorButton width="30%" sx={{ marginTop: "5%" }}>
              {" "}
              Sign up Now
            </ColorButton>
          </Grid>

          <Grid
            sx={{
              marginTop: "6%",
              position: "relative",
              left: { sm :"15%" , md: '15%'},
              alignSelf: "center",
              textAlign: { xs: 'center'}
            }}
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Typography variant="h3" gutterBottom>
              Boukers
            </Typography>
            <Typography sx={{ marginTop: "5%" }}>
              Delivery Pick-up and drop-off with bouk means being your own boss
              and working at your own terms while earning like a 9-5. Bouk now*.
            </Typography>
            <ColorButton width="30%" sx={{ marginTop: "5%" }}>
              {" "}
              Bouk Now
            </ColorButton>
          </Grid>
          <Grid sx={{ marginTop: "6%" }} item xs={12} sm={6} md={6}>
            <img
              style={{  height: "50vh" }}
              src="images/unsplash-o-knmj-6acm-6@1x.png"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F8FB",
          padding: "10%",
          height: { xs: "1700px", sm: "900px" },
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          What we value the most
        </Typography>
        <Typography
          sx={{
            marginTop: "1%",
            width: "50vw",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          We cannot lose sight of our values in our endeavor to satisfy our
          customers. It is the lifeblood and driving force of our company and
          platform. This helps us make customer-centric decisions and maintains
          the long-term relationship we have built with our customers.
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3%",
            textAlign: "center",
          }}
          container
          spacing={1}
        >
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h4" gutterBottom>
              Customer first
            </Typography>
            <Typography
              sx={{
                marginTop: "10%",
              }}
            >
              We live and breathe for our consumers and users, which is why
              providing them with a personalized, seamless experience is what
              keeps us afloat. The customer is the center of attention at bouk.
              It is everyone’s obligation to provide excellent customer service
              here. Because we value our customers, our boukers prioritize
              prompt delivery when they pick up.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h4" gutterBottom>
              Obsession with quality and honesty
            </Typography>
            <Typography
              sx={{
                marginTop: "10%",
              }}
            >
              We have built a platform where everyone can come to sell and buy.
              It is essential that our merchants provide customers with quality
              products and honest descriptions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h4" gutterBottom>
              Growth mindset
            </Typography>
            <Typography
              sx={{
                marginTop: "10%",
              }}
            >
              We at bouk are always acquiring fresh information and learning
              from our customers. We will not stop looking for ways to make our
              customers happy. We are building a firm that has never been
              established before, and in order to thrive, we must never stop
              evolving; join us and experience the growing rewards.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative" }}>
          <Box sx={{ backgroundColor: "#E0CCFF" ,  height: { xs: "740px", sm: "50%", md: "50%" }}}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                alignSelf: "center",
                padding: "2%",
              }}
              gutterBottom
              variant="h3"
              component="h3"
            >
              Testimonials
            </Typography>
            <Grid container spacing={2}>
              <Grid container>
                <Grid
                  sx={{
                    paddingLeft: "5%",
                    display: "flex",
                    height: "60vh",
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                  container
                >
                  <Grid sx={{}} item xs={12} sm={2} md={2}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2%",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "10%", alignSelf: "left" }}
                        image="/images/quote2@2x.svg"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                          Fill in the address you want your items to be picked
                          up and also the address where you want it delivered.
                          Fill in the address you want your items to be.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Avatar
                          alt="Remy Sharp"
                          src="images/ellipse-85-2@2x.png"
                        />
                        <Typography
                          sx={{ paddingLeft: "10%", textAlign: "right" }}
                        >
                          <b>Odele Tega </b>
                          <br />
                          CEO Bouk Technologies
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid sx={{}} item xs={12} sm={2} md={2}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2%",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "10%", alignSelf: "left" }}
                        image="/images/quote2@2x.svg"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                          Fill in the address you want your items to be picked
                          up and also the address where you want it delivered.
                          Fill in the address you want your items to be.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Avatar
                          alt="Remy Sharp"
                          src="images/ellipse-85-2@2x.png"
                        />
                        <Typography
                          sx={{ paddingLeft: "10%", textAlign: "right" }}
                        >
                          <b>Odele Tega </b>
                          <br />
                          CEO Bouk Technologies
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid sx={{}} item xs={12} sm={2} md={2}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2%",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "10%", alignSelf: "left" }}
                        image="/images/quote2@2x.svg"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                          Fill in the address you want your items to be picked
                          up and also the address where you want it delivered.
                          Fill in the address you want your items to be.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Avatar
                          alt="Remy Sharp"
                          src="images/ellipse-85-2@2x.png"
                        />
                        <Typography
                          sx={{ paddingLeft: "10%", textAlign: "right" }}
                        >
                          <b>Odele Tega </b>
                          <br />
                          CEO Bouk Technologies
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid sx={{}} item xs={12} sm={2} md={2}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2%",
                        backgroundColor: "#e6e6e6",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "10%", alignSelf: "left" }}
                        image="/images/quote2@2x.svg"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                          Fill in the address you want your items to be picked
                          up and also the address where you want it delivered.
                          Fill in the address you want your items to be.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Avatar
                          alt="Remy Sharp"
                          src="images/ellipse-85-2@2x.png"
                        />
                        <Typography
                          sx={{ paddingLeft: "10%", textAlign: "right" }}
                        >
                          <b>Odele Tega </b>
                          <br />
                          CEO Bouk Technologies
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#3E236E",
              position: "relative",
              zIndex: 3,
              bottom: '5%',
              width: "80%",
              margin: "0 auto",
              borderRadius: "10px",
            }}
          >
            <Grid container>
              <Grid sx={{ padding: "3%" , textAlign: { xs: 'center'}}} item xs={12} sm={6} md={6}>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "5%", color: "#fff", padding: "5%" }}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Join our community
                </Typography>
                <Typography sx={{ padding: "5%", color: "#fff" }}>
                  While creating an avenue for business owners to sell their
                  products on the platform.
                </Typography>
                <Button sx={{ color: '#3E236E' , backgroundColor: '#fff' ,marginLeft: "5%"}}>Join Now</Button>
              </Grid>
              <Grid sx={{  padding: { xs: "10%", sm: "0", md: "0" }  }} item xs={12} sm={6} md={6}>

                <img style={{ width: '80%'}} src="images/car@2x.png" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ClientsSection />
      <Footer /> */}
    </div>
  );
};

export default About;
