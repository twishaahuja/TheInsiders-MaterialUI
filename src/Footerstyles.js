// import styled from 'styled-components'; 
export const FooterStyles = {
Box : {
padding: '80px 60px',
background: 'black',
position: 'absolute', 
bottom: 0,
width: '100%', 
 },
Container : {
	display: 'flex', 
	flexdirection: 'column',
	justifycontent: 'center',
	maxwidth: '1000px', 
	margin: '0 auto', 
	/* background: red; */
},

div : { 
display: 'flex',
flexdirection: 'column',
textalign: 'left', 
marginLeft: '60px',
},
Row : {
display: 'grid', 
gridtemplatecolumns: 'repeat(auto-fill, minmax(185px, 1fr))', 
gridgap: '20px',

} ,
a : {
color: '#fff', 
marginbottom: '20px', 
fontsize: '18px', 
textdecoration: 'none', 

'&:hover': { 
	color: 'green', 
	transition: '200ms ease-in', 
} 
},
h3 : { 
fontsize: '24px', 
color: '#fff', 
marginbottom: '40px', 
fontweight: 'bold', 
},
}
