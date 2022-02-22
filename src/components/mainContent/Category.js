import React from 'react';

const categoryStyle = {
    flexBasis:'50%',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    padding:' 7px',
    fontFamily:'Courier',
}

class Category extends React.Component {
    render(){
        return (
            <div style={categoryStyle}>
                <header>List of Category:
                    <ul>
                        <li>
                            Salary
                        </li>
                        <li>
                            Work
                        </li>
                        <li>
                            Programming
                        </li>
                        <li>
                            Holiday
                        </li>
                        <li>
                            Life Balance
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Category;