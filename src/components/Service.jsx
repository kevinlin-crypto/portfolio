import React from "react";

export default function Service({ service }) {
    return (
        <div className="flex p-8 flex-col justify-between gap-8 rounded-xl bg-white">
            <div className="flex justify-center">
                { service.icon }
            </div>
            <div className="flex flex-col gap-2">
                <h6 className="text-lg text-bold text-center">{ service.title }</h6>
                <p className="text-gray-700 text-center">{ service.description }</p>
            </div>
        </div>
    );
}