import React from "react";
import "./button.css";

const Button = (props) => {
    return (
        <a href={props.link} style={{ backgroundColor: props.bgcolor, color: props.textcolor }} className="button">{ props.text }</a>
    );
}

export default Button;