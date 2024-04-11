 
import { Link } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";


const ColorButton = styled(Button)(({ width }) => ({
  color: "#fff",
  backgroundColor: '#3e236e',
  padding: "2%",
  width: width,
  "&:hover": {
    backgroundColor: deepPurple[700],
  },
}));

export default ColorButton