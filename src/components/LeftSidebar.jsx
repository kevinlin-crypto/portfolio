import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import DownloadCV from "./DownloadCV";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";

export default function LeftSidebar() {
    return (
        <div className="w-full h-full px-8 py-4 flex flex-col">
            <div className="relative w-full h-full flex flex-col">
                <GeneralInfo />
                <SimpleBar className="skill-container">
                    <Skills />
                </SimpleBar>
                <DownloadCV />
            </div>
        </div>
    );
}