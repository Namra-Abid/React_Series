import React from "react";

const JSX_three_params= ()=> {
    return React.createElement(
        'p',
        {id:'p', class:'paragraph'},
        React.createElement('h3',null,'In this we give it all three parameters' )
    )
}

export default JSX_three_params