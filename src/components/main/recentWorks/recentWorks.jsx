import React from "react";
import HorizontalLine from "../../horizontalLine/horizontalLine";
import Image from "../image/image";
import "./recentWorks.css";

const RecentWorks = () => {
    return (
        <div className="recentWorksContainer">
            <h2>Our Recent Work</h2>
            <div className="imgContainer">
                {
                    [...Array(12)].map((e,i) => <Image height="350px" width="350px" key={i}/>)
                }
            </div>
            <HorizontalLine />
        </div>
    );
}

export default RecentWorks;