import React from "react";
import HorizontalLine from "../../horizontalLine/horizontalLine";
import Image from "../image/image";
import AgencyBrief from "./agencyBrief/agencyBrief";
import "./briefs.css"
import Work from "./works/works";

const Briefs = () => {
    return (
        <div className="breifContainer">
            <div className="flexContainer">
                <AgencyBrief/>
                <Image height="350px" width="750px" />
            </div>
            <div className="flexContainer">
                <Work workTitle="Photoshop" workText="Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna."/>
                <Work workTitle="Javascript" workText="Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna."/>
                <Work workTitle="Marketing" workText="Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna."/>
            </div>
            <HorizontalLine />
        </div>
    );
}

export default Briefs;
