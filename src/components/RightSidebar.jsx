import { Home3, Profile } from "iconsax-react";
import React from "react";
import { Sun } from "react-feather";

export default function RightSidebar() {

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
        <div className="w-full h-full p-8 flex flex-col right-sidebar-wrapper gap-4">
            <div className="flex justify-center">
                <Sun size={24} className="text-primary cursor-pointer" />
            </div>
            <div className="h-full flex flex-col justify-center items-center gap-8">
                { menuItems.map((item, key) => (
                    <div key={key} className="flex justify-center">
                        <div className="rounded-full bg-primary p-2 cursor-pointer">
                            { item.icon }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}