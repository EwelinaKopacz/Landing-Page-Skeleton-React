import React from 'react';

const copyrightsStyle = {
    alignSelf:'center',
    fontFamily:'Courier',
    letterSpacing:'1px',
    fontSize:'16px',
    paddingLeft:'30px'
}

const Copyrights = () => {
    return(
        <div style={copyrightsStyle}>
            <p>Copyrights &copy; 2022</p>
        </div>
    )
}

export default Copyrights;