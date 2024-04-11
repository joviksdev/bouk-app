import React from "react";
import DrawerAppBar from "../components/Navbar";
 
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { ReactComponent as Playstore } from "../assets/play-store.svg";
import { ReactComponent as Appstore } from "../assets/apple-store.svg";
import Iphonex from "../assets/iphonex.svg";
const Download = () => {
  return (
    <div>
      <DrawerAppBar />
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
       
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            margin: "0 auto",
            position: 'relative',
            top: 54,
           fontSize: { xs : 44, sm : 64},
            fontWeight: "bold",
          }}
        >
          Download Bouk
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#3E236E",
          position: "absolute",
          left: '50%',
          bottom: 0,
          transform: "translate(-50%, 0)",
          height: "75%",
          width: "100%",
          borderRadius: "50% 50% 0 0",
        }}
      >
        <Grid sx={{ display: 'flex' , justifyContent: 'center'}} container spacing={2}>
          <Grid sx={{ display :' flex' , alignContent: 'center', justifyContent: 'center', marginTop: { xs: '15%', sm : '5%', md : '5%'}}} item xs={12} sm={12} md={12}>
            <Button onClick={event =>  window.location.href='https://apps.apple.com/us/app/bouk/id1623909945'}  startIcon={  <Appstore className="appstore" />}> </Button>
            <Button onClick={event =>  window.location.href='https://play.google.com/store/apps/details?id=com.bouk&hl=en_ZA&gl=US'}   startIcon={<Playstore className="playstore" />}> </Button>
          
          </Grid>
          <Grid sx={{   bottom:0 , display: 'flex', alignContent: 'center', justifyContent: 'center' }} item xs={12} sm={12} md={12}>
          <img src={Iphonex} alt="iphone" />
          </Grid>
       
        </Grid>
        
       
      </Box>
    </div>
  );
};

export default Download;
