// Content 6 komponenty
// ContentLeft - kolumna lewa szeroka tutaj bedzie wsadzony - ContentMain tresc
// ContentRight - kolumna prawa - sidebar // moze dodac tutaj 2 komponenty - sekcja Category i sekcja Gallery

import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const contentStyle = {
    display:'flex',
    minHeight:'70vh',
    margin:'5px 10px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
}

class Content extends React.Component{
    render() {
        return (
            <div style={contentStyle}>
                    <ContentLeft/>
                    <ContentRight/>
            </div>
        )
    }
}

export default Content;