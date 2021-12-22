import React from "react";
import portrait from "../assets/img/portrait.png";

export default function GeneralInfo() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center">
                <img src={portrait} alt="portrait" className="rounded-full w-36 mt-8 mb-4" />
            </div>
            <h5 className="text-center font-bold">Philip Acho</h5>
            <h6 className="text-center">Senior Full-stack Developer</h6>
            <div className="flex items-center gap-2">

            </div>
        </div>
    );
}