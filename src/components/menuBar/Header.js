import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const headerStyle = {
    display:'flex',
    aliginItems:'center',
    justifyContent:'space-between',
    minHeight:'10vh',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    margin:'5px 10px',


}
const logoText = 'ClickWeb';

const menuItems = [
    {text: 'home', url: '/'},
    {text: 'about', url: '/about'},
    {text: 'offer', url: '/offer'},
    {text: 'contact', url: '/contact'}
];

class Header extends React.Component {
    render(){
        return(
            <header style = {headerStyle}>
                <Logo text = {logoText}/>
                <Nav items = {menuItems}/>
            </header>
        )
    }
}

export default Header;