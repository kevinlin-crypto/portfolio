import React, { useContext } from "react";
import { Home3, Profile } from "iconsax-react";
import { Sun, X, Moon } from "react-feather";
import { UIContext } from "../App";

export default function RightSidebar() {

    const { uiState, uiDispatch } = useContext(UIContext);

    let menuItems = [
        {
            name: "Home",
            icon: <Home3 variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Profile",
            icon: <Profile variant="Bold" color="#ffffff" size={24} />
        },
    ];

    return (
        <div className="w-full h-full p-8 flex flex-col right-sidebar-wrapper gap-4 bg-white dark:bg-dark-bg-primary">
            { uiState.collapsedMenu ? (
                <div className="flex justify-center" onClick={ () => uiDispatch({ type: "CLOSE_RIGHT_MENU" }) }>
                    <X size={24} className="cursor-pointer"  color={ uiState.dark ? "#ffffff" : "#292D32" } />
                </div>
            ) : (
                <div className="flex justify-center" onClick={ () => uiDispatch({ type: "TOGGLE_THEME" })}>
                    { uiState.dark ? <Sun size={24} className="text-primary cursor-pointer" /> : <Moon size={24} className="text-primary cursor-pointer" />}
                </div>
            ) }
            <div className="h-full flex flex-col justify-center items-center gap-8">
                { menuItems.map((item, key) => (
                    <div key={key} className="flex justify-center">
                        <div className="rounded-full p-2 bg-primary cursor-pointer">
                            { item.icon }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}