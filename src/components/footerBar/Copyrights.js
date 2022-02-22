import React from 'react';

const copyrightsStyle = {
    alignSelf:'center',
    fontFamily:'Courier',
    letterSpacing:'1px',
    fontSize:'16px',
    paddingLeft:'30px',
    paddingRight:'30px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
}

const Copyrights = () => {
    return(
        <div style={copyrightsStyle}>
            <p>Copyrights &copy; 2022</p>
        </div>
    )
}

export default Copyrights;