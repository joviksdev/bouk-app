import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SimpleAccordion(props) {
  return (
    <div>
      {props.data.map((item, i) => {
        return (
          <Accordion
            sx={{
              outline: "none",
              padding: "3%",
              marginTop: {xs: "5%", sm: '2%', md : '2%'},
              width: "80%",
              backgroundColor: "#F8F8F8",
              borderRadius: 5,
              border: "none",
              boxShadow: "none",
              borderStyle: "none",
              margin: '0 auto',
              '&::before': {height: 0}
            }}
            key={i}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 500, fontSize: '20px'}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
export default SimpleAccordion;
