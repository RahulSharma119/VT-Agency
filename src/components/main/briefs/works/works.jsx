import React from "react";

const Work = (props) => {
    return (
        <div style={{ display:"inline", padding:"5px", margin:"5px" }}>
            <h3>{ props.workTitle }</h3>
            <p>{ props.workText }</p>
        </div>
    );
}

export default Work;