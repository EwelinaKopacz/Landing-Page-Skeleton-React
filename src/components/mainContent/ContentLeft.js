import React from 'react';
import ContentTitle from './ContentTitle';
import ContentArticle from './ContentArticle';

const contentLeftStyle ={
    width:'70%',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    padding:'20px'
}

const ContentLeft = () => <div style={contentLeftStyle}>
            <ContentTitle/>
            <ContentArticle/>
        </div>

export default ContentLeft;