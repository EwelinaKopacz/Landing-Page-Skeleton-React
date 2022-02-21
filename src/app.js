import React from 'react';
import ReactDOM from 'react-dom';
import PagePost from '../src/components/PagePost';

const RenderPage = () => <PagePost/>

ReactDOM.render(
    <RenderPage/>,
    document.querySelector('body')
);


