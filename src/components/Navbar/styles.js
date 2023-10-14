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
            background: '#FFFBF8',
            // height: '120vh',
            width: '40.8vh',
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
            fontFamily: 'Jost',
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};