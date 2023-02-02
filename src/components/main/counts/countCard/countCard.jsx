import React from "react";

const CountCard = (props) => {
    
    return (
        <a href="#" style={{ display:"inline", color: "blue"}}>
            <h2>{ props.count }</h2>
            <h3>{ props.k }</h3>
        </a>
    );
}


export default CountCard;