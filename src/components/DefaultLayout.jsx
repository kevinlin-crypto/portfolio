/**
 * Default Layout
 */
import React from "react";
import LeftSidebar from "./LeftSidebar";

export default function DefaultLayout() {
    return (
        <div className="app-layout">
            <div className="left-sidebar-container">
                <LeftSidebar />
            </div>
            <div className="page-container">
                
            </div>
            <div className="right-sidebar-container">

            </div>
            <div className="mobile-header-container">

            </div>
        </div>
    );
}