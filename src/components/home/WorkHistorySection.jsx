import React from "react";
import upworkLogo from "../../assets/img/upwork.png";
import yklmLogo from "../../assets/img/yklm.png";
import centuryLogo from "../../assets/img/century3.png";
import Work from "../Work";

const works = [
    {
        logo: upworkLogo,
        companyName: "Upwork",
        role: "Senior Web Developer",
        period: "2017-present",
        roles: [
            "28 Jobs done with 96% of JSS (Job Success Score)",
            "Top rated developer since 2019",
            "Developed 4 ecommerce websites, 1 CMS, 1 SaaS platforms using Laravel, MERN and Vue",
            "Provided startups with technical solutions on cloud services, DevOps, and coding challenges"
        ]
    },
    {
        logo: yklmLogo,
        companyName: "YKLM Auctions",
        role: "Senior Lead Developer",
        period: "2019-2021",
        roles: [
            "Coached 2 junior developers in code standards",
            "Developed a REST API using Laravel PHP framework",
            "Developed a developer portal front end",
            "Spearheaded transition from firebase to AWS, saving company $2500+ monthly and increasing load speeds by an average of 30%",
            "Developed documentation to teach new team members company standards and best practices in React.js and Laravel",
            "Addressed complex issues with real-time lead prioritization using WebSocket connectivity"
        ]
    },
    {
        logo: centuryLogo,
        companyName: "Century 3 Inc",
        role: "Senior Front-end Developer",
        period: "2012-2014",
        roles: [
            "Created a Mobile Responsive User Experience with ReactJS that allowed cross-platform accessibility to the website on any device with primary use on mobile",
            "Built API following RESTful standards to allow users to submit information by storing data in MongoDB",
            "Partnered with data science to develop the front end for a product recommendation engine that increased user time on page by 4 minutes",
            "Curated over 50 website changes to increase the user flow and understanding of all platform capabilities and features"
        ]
    }
];

export default function WorkHistorySection() {
    return (
        <div id="work" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">Work History</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">I have worked in several different companies in different industries. Here are some of them.</p>
            </div>
            <div className="flex flex-col p-8 rounded-xl bg-white dark:bg-dark-bg-primary">
                { works.map((work, key) => <Work key={key} work={work} borderLine={key !== works.length - 1} />) }
            </div>
        </div>
    );
}