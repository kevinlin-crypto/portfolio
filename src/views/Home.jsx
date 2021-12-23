import React from "react";
import Banner from "../components/home/Banner";
import ServiceSection from "../components/home/ServiceSection";

export default function Home() {
    return (
        <div className="p-6 flex flex-col gap-36">
            <Banner />
            <ServiceSection />
        </div>
    );
}