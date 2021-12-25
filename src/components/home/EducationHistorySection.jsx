import React from "react";
import nankaiLogo from "../../assets/img/nankai.png";
import fredoniaLogo from "../../assets/img/fredonia.png";
import Education from "../Education";

const educations = [
    {
        logo: nankaiLogo,
        universityName: "Nankai University",
        role: "Bachelor's Degree | Robotics Technology",
        period: "2009-2013",
        description: "Robotics Technology is the bachelor degree course with many interesting robotic subjects and related courses like Motion Planning, Artificial Intelligence, Machine Learning, Computer Vision and Computer Programming of Robotics."
    },
    {
        logo: fredoniaLogo,
        universityName: "State University of New York at Fredonia",
        role: "Master's Degree | Computer Science",
        period: "2017-2018",
        description: "The Master of Science (MS) in Computer Science and Information Systems program offers concentrations in Computer Science or Information Systems, as well as a preparatory Fast Track forthose without a computer science background. It prepares you to enter and excel in a career as anadministrator, analyst, designer, developer, or programmer leading technology teams."
    }
];

export default function EducationHistorySection() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center">Education History</h2>
                <p className="text-center text-gray-700 lg:max-w-xl">I have bachelor's degree in Robotic Engineering and Master's Degree in Computer Science.</p>
            </div>
            <div className="flex flex-col p-8 rounded-xl bg-white">
                { educations.map((education, key) => <Education key={key} education={education} borderLine={key !== educations.length - 1} />) }
            </div>
        </div>
    );
}