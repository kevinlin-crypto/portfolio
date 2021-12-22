import React from "react";
import GeneralInfo from "./GeneralInfo";

export default function LeftSidebar() {
    return (
        <div className="left-sidebar-wrapper w-full h-full px-8 py-4 flex flex-col">
            <GeneralInfo />
        </div>
    );
}