import React from "react";
import "./counts.css";
import CountCard from "./countCard/countCard";
import HorizontalLine from "../../horizontalLine/horizontalLine";

const Counts = () => {
    const data = {
        "Websites": 28,
        "Apps": 43,
        "Ads": 95,
        "Cakes": 59,
        "Logos": 18
    }
    return (
        <div className="countsContainer">
            <div className="countsInner">
                {
                    Object.keys(data).map((k, index) => {
                        return (
                            <CountCard count={data[k]} k={k} key={index} />
                        );
                    })
                }
            </div>
            <HorizontalLine />
        </div>
    );
}


export default Counts;