// Header 3 komponenty
// Header glowny - ma wyrenderowac prostokat 
// Logo - po lewej - napis
// Nav - po prawej - tresc

import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const headerStyle = {
    display:'flex',
    aliginItems:'center',
    justifyContent:'space-between',
    minHeight:'20vh',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    margin:'5px 10px',


}

class Header extends React.Component {
    render(){
        return(
            <header style={headerStyle}>
                <Logo/>
                <Nav/>
            </header>
        )
    }
}

export default Header;