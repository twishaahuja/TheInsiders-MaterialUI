import React from "react"; 
import { FooterStyles} from "./Footerstyles"; 
import { Box } from "@mui/material";
// import  from "@mui/material";

const Footer = () => { 
return ( 
	<Box style={{
        padding: '80px 60px',
        background: 'beige',
        position: 'absolute', 
        bottom: 0,
        width: '100%', 
         }}> 
	<h1 style={{ color: "black", 
				textAlign: "center", 
				marginTop: "-50px" }}> 
		COPYRIGHT © 2023. The Insiders
	</h1> 
	</Box> 
); 
}; 
export default Footer; 
