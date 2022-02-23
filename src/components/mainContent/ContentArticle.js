import React from 'react';

const contentArticleStyle ={
    fontFamily:'Courier',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    lineHeight:'20px',
    padding:'10px'
}

const ContentArticle = props => <p style={contentArticleStyle}>{props.article}</p>

export default ContentArticle;