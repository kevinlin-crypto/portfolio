import { CloseSquare } from "iconsax-react";
import SimpleBar from "simplebar-react";
import React, { useContext } from "react";
import { UIContext } from "../App";

export default function ProjectDetail() {

    const { uiState, uiDispatch } = useContext(UIContext);
    const project = uiState.project;

    return (
        <div className="fixed z-50 inset-0 bg-gray-700/75 flex justify-center items-center">
            <div className="bg-white detail-modal rounded-lg p-8 relative flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{ project.name}</h2>
                <div className="absolute flex top-2 right-2 cursor-pointer" onClick={() => uiDispatch({ type: "CLOSE_PROJECT_MODAL" })}>
                    <CloseSquare size={24} color="#655af3" />
                </div>
                <SimpleBar className="detail-wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <img className="rounded-lg" src={project.image} alt={project.name} />
                        </div>
                        <div className="flex flex-col">
                            <p><span className="text-primary font-bold mr-4">Type:</span> {project.type}</p>
                            <p><span className="text-primary font-bold mr-4">Link:</span> <a href={project.link} target="_blank">{ project.link }</a></p>
                            <hr className="my-4"/>
                            <p className="text-primary font-bold">Description:</p>
                            <p>{ project.description }</p>
                            <hr className="my-4"/>
                            <p className="text-primary font-bold">Project Scopes:</p>
                            <ul className="list-disc ml-8 mt-4">
                                { project.scopes.map((scope, key) => <li key={key}>{ scope }</li>) }
                            </ul>
                            <hr className="my-4"/>
                            <p className="text-primary font-bold">Technologies:</p>
                            <ul className="list-disc ml-8 mt-4">
                                { project.technologies.map((technology, key) => <li key={key}>{ technology }</li>) }
                            </ul>
                            <hr className="my-4"/>
                            <p className="text-primary font-bold">Project Timeline:</p>
                            <p>{ project.period }</p>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
}