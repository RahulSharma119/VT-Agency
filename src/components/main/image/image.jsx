import React from "react";
import "./image.css";

const Image = (props) => {
    return (
        <div className="imageContainer">
            <div style={{ height: props.height, width: props.width }} className="imageInnerContainer">
                {props.width} X {props.height}
            </div>
        </div>
    );
}

export default Image;