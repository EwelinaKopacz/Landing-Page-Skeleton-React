import React from 'react';
import Header from './menuBar/Header';
import Content from './mainContent/Content';

class PagePost extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <Content/>
            </>
        )
    }
}

export default PagePost;