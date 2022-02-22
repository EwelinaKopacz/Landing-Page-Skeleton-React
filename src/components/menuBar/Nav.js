import React from 'react';

const ulStyle  = {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    paddingRight:'30px'
}

const liStyle = {
    padding:'0.8rem',
    listStyle:'none'
}

const aStyle = {
    fontFamily:'Courier',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: '2px',
    color:'black',
    fontSize:'20px'
}



const Nav = () => {
    return (
        <ul style={ulStyle}>
            <li style={liStyle}>
                <a href="/" style={aStyle}>Home</a>
            </li>
            <li style={liStyle}>
                <a href="/about" style={aStyle}>About</a>
            </li>
            <li style={liStyle}>
                <a href="/offer" style={aStyle}>Offer</a>
            </li>
            <li style={liStyle}>
                <a href="/contact" style={aStyle}>Contact</a>
            </li>
        </ul>
    )
}

export default Nav;