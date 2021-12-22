import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import portrait from "../assets/img/portrait.png";

const externalLinks = [
    {
        link: "https://www.facebook.com/liqiang1996612/",
        icon: <Facebook className="text-white" size={16}/>
    },
    {
        link: "https://twitter.com/CofeDing",
        icon: <Twitter className="text-white" size={16}/>
    },
    {
        link: "https://www.linkedin.com/in/philip-acho-4ba1a019b/",
        icon: <Linkedin className="text-white" size={16}/>
    },
    {
        link: "https://www.instagram.com/cecescrazycreams/",
        icon: <Instagram className="text-white" size={16}/>
    }
];

export default function GeneralInfo() {
    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
            <div className="flex justify-center">
                <img src={portrait} alt="portrait" className="rounded-full w-36 mt-8 mb-4" />
            </div>
            <h5 className="text-center font-bold">Philip Acho</h5>
            <h6 className="text-center">Senior Full-stack Developer</h6>
            <div className="flex items-center justify-center gap-2">
                { externalLinks.map((link, key) => (
                    <a className="bg-primary p-2 rounded-full" href={link.link} key={key} target="_blank">
                        { link.icon }
                    </a>
                )) }
            </div>
        </div>
    );
}