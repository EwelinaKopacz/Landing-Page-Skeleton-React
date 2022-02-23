import React from 'react';

const ulStyle  = {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    paddingRight:'30px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
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

class Nav extends React.Component{
    render(){
        return (
            <ul style={ulStyle}>{this.renderItems()}</ul>
        )
    }
    renderItems(){
        return (
            <>
                {this.props.items.map((item) => {
                    return(
                        <li style={liStyle}>
                            <a style={aStyle} href ={item.url}>{item.text}</a>
                        </li>
                    )
                })
            }
            </>
        )
    }
}


export default Nav;
