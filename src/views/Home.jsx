import React from "react";
import Banner from "../components/home/Banner";
import ServiceSection from "../components/home/ServiceSection";
import WorkHistorySection from "../components/home/WorkHistorySection";
import EducationHistorySection from "../components/home/EducationHistorySection";
import ProjectSection from "../components/home/ProjectSection";

export default function Home() {
    return (
        <div className="p-6 flex flex-col gap-36">
            <Banner />
            <ServiceSection />
            <WorkHistorySection />
            <EducationHistorySection />
            <ProjectSection />
        </div>
    );
}