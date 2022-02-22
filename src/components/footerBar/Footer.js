// Footer 3 komponenty
// Footer glowny
// Copyright po lewej stronie
// Nav z menuBar po prawej stronie

import React from 'react';
import Copyrights from './Copyrights';
import Nav from '../menuBar/Nav';

const footerStyle = { 
    display:'flex',
    aliginItems:'center',
    justifyContent:'space-between',
    minHeight:'10vh',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    margin:'5px 10px',
}

const Footer = () => {
    return(
        <footer style={footerStyle}>
            <Copyrights/>
            <Nav/>
        </footer>
    )
}

export default Footer;