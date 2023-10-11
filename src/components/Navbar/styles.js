export const navbarStyles = {
    drawer: {
        width: 320,
        height: 30,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            // width: 320,
            boxSizing: 'border-box',
            // backgroundColor: '#101F33',
            color: 'black',
            background: 'beige',
            // height: '120vh',
            width: '46.8vh',
            // position: 'sticky',
            top: '80px',
            
            
        },
        '& .Mui-selected': {
            color: 'red',
        },
        
    },
    icons: {
        color: 'black',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            FontFace: 'roboto',
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};