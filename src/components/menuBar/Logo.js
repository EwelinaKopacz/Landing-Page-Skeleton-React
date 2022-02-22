// Komponent ma wygenerowac tresc znajdujaca sie po lewej stronie
// Obrazek ma byc przekazany w <Header/>

import React from 'react';

const logoStyle = {
    alignSelf:'center',
    fontFamily:'Courier',
    letterSpacing:'1px',
    fontWeight:'500',
    fontSize:'22px',
    paddingLeft:'30px'
}

const Logo = () => <p style={logoStyle}>ClickWeb</p>

export default Logo;