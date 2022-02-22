import React from 'react';
import Category from './Category';
import Gallery from './Gallery';

const contentRightStyle ={
    display:'flex',
    flexDirection:'column',
    width:'30%',
    padding:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
}

const ContentRight = () => {
    return (
        <div style={contentRightStyle}>
            <Category/>
            <Gallery/>
        </div>
    )
}

export default ContentRight;