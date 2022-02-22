import React from 'react';
import Header from './menuBar/Header';
import Content from './mainContent/Content';
import Footer from './footerBar/Footer';

class PagePost extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <Content/>
                <Footer/>
            </>
        )
    }
}

export default PagePost;