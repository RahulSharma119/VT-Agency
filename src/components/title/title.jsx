import React from "react";
import Button from "./button/button";
import './title.css';

const Title = () => {
    return (
        <div className="titleContainer">
            <h1 className="titleText">Changing the World Through Design</h1>
            <p className="titleBody">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.</p>
            <div className="titleButtons">
                <Button link="#" bgcolor="#2199e8" textcolor="white" text="Learn More" />
                <Button link="#" bgcolor="white" textcolor="#2199e8" text="Learn Less" />
            </div>
        </div>

    );
}

export default Title;