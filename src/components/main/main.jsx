import React from "react";
import Briefs from "./briefs/briefs";
import Counts from "./counts/counts";
import "./main.css"
import RecentWorks from "./recentWorks/recentWorks";

const Main = () => {
    return (
        <div className="mainContainer">
            <Briefs />
            <Counts />
            <RecentWorks />
        </div>
    );
}

export default Main;
