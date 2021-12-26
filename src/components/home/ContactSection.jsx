import { CallAdd, Map, MessageSearch } from "iconsax-react";
import React from "react";
import Contact from "../Contact";
import ContactForm from "../ContactForm";

const contacts= [
    {
        icon: <Map color="#FFFFFF" size={24} />,
        items: [
            {
                title: "Address",
                value: "1406 W 8th Street"
            },
            {
                title: "City, State",
                value: "Pecos, TX"
            },
            {
                title: "Postal code",
                value: "79772"
            }
        ],
    },
    {
        icon: <MessageSearch color="#FFFFFF" size={24} />,
        items: [
            {
                title: "Email",
                value: "philip_acho@outlook.com"
            },
            {
                title: "Skype",
                value: "live:.cid.43307eaaee4b85f1"
            },
            {
                title: "Discord",
                value: "lovecoding#4752"
            }
        ],
    },
    {
        icon: <CallAdd color="#FFFFFF" size={24} />,
        items: [
            {
                title: "Phone",
                value: "(661) 228-0244"
            }
        ]
    }
];

export default function ContactSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-36">
            <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold dark:text-white">Leave Us Your Message</h2>
                <ContactForm />
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold dark:text-white">Contact Information</h2>
                <div className="flex flex-col gap-4">
                    { contacts.map((contact, key) => <Contact key={key} contact={contact} />) }
                </div>
            </div>
        </div>
    );
}