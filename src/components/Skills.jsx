import React from "react";
import ProgressBar from "./ProgressBar";

const mainInfo = [
    {
        label: "Age:",
        value: new Date().getUTCFullYear() - 1992
    },
    {
        label: "Residence:",
        value: "USA"
    },
    {
        label: "Phone:",
        value: "(661) 228-0244"
    },
    {
        label: "Address:",
        value: "Pecos, TX"
    }
];

const Languages = [
    {
        name: "English",
        level: 100
    },
    {
        name: "Chinese",
        level: 100
    },
    {
        name: "Japanese",
        level: 70
    }
];

export default function Skills() {
    return (
        <div className="w-full flex flex-col">
            <div className="py-4 border-b border-gray-300 flex flex-col gap-2">
                { mainInfo.map((info, key) => (
                    <div key={key} className="flex justify-between items-center">
                        <p className="bg-primary px-2 text-white">{ info.label }</p>
                        <p>{ info.value }</p>
                    </div>
                )) }
            </div>
            <div className="py-4 border-b border-gray-300 flex flex-col gap-2">
                <h6 className="font-bold mb-2">Languages</h6>
                { Languages.map((language, key) => <ProgressBar key={key} label={language.name} value={language.level/100} display={`${language.level}%`}/>) }
            </div>
        </div>
    );
}