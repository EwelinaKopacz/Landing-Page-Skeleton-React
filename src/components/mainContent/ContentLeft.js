import React from 'react';
import ContentTitle from './ContentTitle';
import ContentArticle from './ContentArticle';

const contentLeftStyle ={
    width:'70%',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    padding:'20px'
}

const postTitle = 'Why Lorem Ipsum?';
const postContent = `What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.`

const ContentLeft = () => <div style={contentLeftStyle}>
            <ContentTitle title={postTitle}/>
            <ContentArticle article={postContent}/>
        </div>

export default ContentLeft;