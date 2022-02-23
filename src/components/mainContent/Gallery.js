import React from 'react';

const galleryStyle = {
    flexBasis:'50%',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    padding:'7px',
    fontFamily:'Courier',
}

class Gallery extends React.Component {
    render(){
        return (
            <div style={galleryStyle}>
                <header><h3>{this.props.name}</h3> </header>
                    <ul>{this.renderPhotos()}</ul>
            </div>
        )
    }
    renderPhotos(){
        return(
            <>
                {this.props.photos.map((item) => <li>Miejsce:{item.destination}, Autor:{item.author}</li>)}
            </>
        )
    }
}

export default Gallery;