/**
 * Default Layout
 */
import React, { useContext } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import ProjectDetail from "./ProjectDetail";
import { UIContext } from "../App";

export default function DefaultLayout({ children }) {

    const {uiState} = useContext(UIContext);

    return (
        <div className="app-layout">
            <div className="left-sidebar-container">
                <LeftSidebar />
            </div>
            <SimpleBar className="page-container">
                { children }
            </SimpleBar>
            <div className="right-sidebar-container">
                <RightSidebar />
            </div>
            <div className="mobile-header-container">

            </div>
            { uiState.openProjectModal && <ProjectDetail /> }
        </div>
    );
}