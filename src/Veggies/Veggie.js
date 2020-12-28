import React from 'react';

const veggie = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and my color is {props.color} - Price : {props.price}</p>
            <p>New Price : <input type="text" onChange={props.changed}/></p>
        </div>
    );
}

export default veggie;