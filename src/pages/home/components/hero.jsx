import React from "react";
 
import FormIcons from "../../../components/form-icons/form-icons";
 
import Box from "@mui/material/Box";
 
import Typography from "@mui/material/Typography";
 
import TextField from "@mui/material/TextField";
 
import Chip from "@mui/material/Chip";
 
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
 
import ColorButton from "../../../components/Button";
 
import { useDispatch, useSelector } from "react-redux";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
 

import {
  setpickUpValue,
  setpickupInputValue,
  setDeliverValue,
  setDeliverInputValue,
  setPickupOptions,
  setdeliverOptions,
} from "../../../redux/mapSlice";
 
 
const data = [
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
    question: "How do I receive payment?",
    answer: "Bouk will make payments weekly to your provided account.",
  },
  {
    question: "Does bouk use third party navigations?",
    answer: "Yes, bouk drivers use third party navigations like google map.",
  },
];
const styles = {
  heroContainer: {
    backgroundImage: `url(${"images/background2.png"})`,
    height: '80vh',
    backgroundRepeat: "no-repeat",
    backgroundSize: "200%",
    backgroundPosition: "right",
    objectFit: "cover",
  },
  leftContainer: {
    padding: "5%",
  },
  iphone: {
    position: "relative",
    top: '35%',
    height: '40vh',
    left: '30%',
    objectFit: 'cover'
   },
  section2: {
    backgroundColor: "#3e236e",
    width: "100%",
    height: { xs: '100%', sm: '70vh' , md: '70vh'}
  },
};
const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];
React.state = {
  name: "",

  email: "",

  buttonText: "Send Message",
};

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const autocompleteService = { current: null };

export default function Hero() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  // if(!isLoaded) {
  //   return;
  // }
  // const google = window.google = window.google ? window.google : {}

  const loaded = React.useRef(false);
  const dispatch = useDispatch();
  const {
    pickupvalue,
    pickupinputValue,
    delivervalue,
    deliverinputValue,
    pickupoptions,
    deliveroptions,
  } = useSelector((state) => state.map);
  const navigate = useNavigate();
 

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

   

    if (!autocompleteService.current && window.google && isLoaded ) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }
    if (pickupinputValue === "") {
      dispatch(setPickupOptions(pickupvalue ? [pickupvalue] : []));
      return undefined;
    }

    fetch({ input: pickupinputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (pickupvalue) {
          newOptions = [pickupvalue];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        dispatch(setPickupOptions(newOptions));
      }
    });

    return () => {
      active = false;
    };
  }, [pickupvalue, pickupinputValue, fetch]);

  React.useEffect(() => {
    let active = true;

  
    if (!autocompleteService.current && window.google && isLoaded )   {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    
    if (!autocompleteService.current) {
      return undefined;
    }

    if (deliverinputValue === "") {
      dispatch(setdeliverOptions(delivervalue ? [delivervalue] : []));
      return undefined;
    }

    fetch({ input: deliverinputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (delivervalue) {
          newOptions = [delivervalue];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        dispatch(setdeliverOptions(newOptions));
      }
    });

    return () => {
      active = false;
    };
  }, [delivervalue, deliverinputValue, fetch]);
  if (!isLoaded) return "Loading...";
  return (
    <Grid container spacing={1}>
    <Grid style={styles.leftContainer} item xs={12} sm={6} md={6}>
      <Chip sx={{ backgroundColor: '#E0CFFF', color: '#884DF0'}} label="Coming soon" />
      <Typography variant="h2" gutterBottom sx={{ fontWeight: "500" }}>
        Avoid the trip
        <br />
        Leave it to us
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Request an item pick up, or order from any location/website and we
        will deliver
      </Typography>
      <Grid container spacing={2}  style={{ marginTop: '2%', display: 'flex', justifyContent: 'flex-start', position: 'relative', right: '6%' }}>
        <Grid item xs={2} sx={{ padding : 0 , margin: 0}}>

          <FormIcons />

        </Grid>
        <Grid item xs={10}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <Autocomplete
              id="pick up"
              sx={{ width: "100%" }}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.description
              }
              filterOptions={(x) => x}
              options={pickupoptions}
              autoComplete
              includeInputInList
              filterSelectedOptions
              value={pickupvalue}
              onChange={(event, newValue) => {
                dispatch(setPickupOptions(
                  newValue ? [newValue, ...pickupoptions] : pickupoptions
                ));

                dispatch(setpickUpValue(newValue));
              }}
              onInputChange={(event, newInputValue) => {
                dispatch(setpickupInputValue(newInputValue));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  id="standard-required"
                  label="Pick up item at?"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue=""
                  variant="standard"
                  size="medium"
                  placeholder="Enter pick up address"
                  fullWidth
                  style={{ width: "100%", marginBottom: "6%" }}
                />
              )}
              renderOption={(props, option) => {
                const matches =
                  option.structured_formatting
                    .main_text_matched_substrings;
                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [
                    match.offset,
                    match.offset + match.length,
                  ])
                );

                return (
                  <li {...props}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Box
                          component={LocationOnIcon}
                          sx={{ color: "text.secondary", mr: 2 }}
                        />
                      </Grid>
                      <Grid item xs>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {option.structured_formatting.secondary_text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </li>
                );
              }}
            />

            <Autocomplete
              id="delivery"
              sx={{ width: "100%" }}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.description
              }
              filterOptions={(x) => x}
              options={deliveroptions}
              autoComplete
              includeInputInList
              filterSelectedOptions
              value={delivervalue}
              onChange={(event, newValue) => {
                dispatch(setdeliverOptions(
                  newValue
                    ? [newValue, ...deliveroptions]
                    : deliveroptions
                ));
                dispatch(setDeliverValue(newValue));
              }}
              onInputChange={(event, newInputValue) => {
                dispatch(setDeliverInputValue(newInputValue));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  id="standard-required"
                  label="Deliver Item at"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue=""
                  variant="standard"
                  size="medium"
                  placeholder="Enter delivery address"
                  fullWidth
                  value={React.state.name}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
              )}
              renderOption={(props, option) => {
                const matches =
                  option.structured_formatting
                    .main_text_matched_substrings;
                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [
                    match.offset,
                    match.offset + match.length,
                  ])
                );

                return (
                  <li {...props}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Box
                          component={LocationOnIcon}
                          sx={{ color: "text.secondary", mr: 2 }}
                        />
                      </Grid>
                      <Grid item xs>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {option.structured_formatting.secondary_text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </li>
                );
              }}
            />

            <ColorButton
              width="100%"
              onClick={() => {
              
                //navigate("/delivery-steps");
              }}
            >
              Get started
            </ColorButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6} md={6} style={styles.heroContainer}>
       
    </Grid>
  </Grid>
  );
}
