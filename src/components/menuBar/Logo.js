// Komponent ma wygenerowac tresc znajdujaca sie po lewej stronie
// Obrazek ma byc przekazany w <Header/>

import React from 'react';

const logoStyle = {
    alignSelf:'center',
    fontFamily:'Courier',
    letterSpacing:'1px',
    fontWeight:'500',
    fontSize:'22px',
    paddingLeft:'30px',
    paddingRight:'30px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
}

const Logo = () => <p style={logoStyle}>ClickWeb</p>

export default Logo;