import React from "react";

const contentTitleStyle ={
    fontFamily:'Courier',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    lineHeight:'10px',
    fontWeight:'400',
    padding:'10px'
}
const ContentTitle = props => <h1 style={contentTitleStyle}>{props.title}</h1>

export default ContentTitle;