import { Send } from "iconsax-react";
import React, { useState } from "react";
import Button from "./Button";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="bg-white rounded-xl p-4 gap-4 flex flex-col dark:bg-dark-bg-primary">
            <div className="flex flex-col gap-1">
                <h6 className="text-sm dark:text-white">Your Full Name (Required)</h6>
                <input type="text" placeholder="Please type your full name" onChange={(e) => setName(e.target.value)} value={name} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </div>
            <div className="flex flex-col gap-1">
                <h6 className="text-sm dark:text-white">Your Email (Required)</h6>
                <input type="email" placeholder="Please type your email" onChange={(e) => setEmail(e.target.value)} value={email} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </div>
            <div className="flex flex-col gap-1">
                <h6 className="text-sm dark:text-white">Subject</h6>
                <input type="text" placeholder="Subject of your message" onChange={(e) => setSubject(e.target.value)} value={subject} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </div>
            <div className="flex flex-col gap-1">
                <h6 className="text-sm dark:text-white">Your Message</h6>
                <textarea type="text" rows={5} placeholder="Subject of your message" onChange={(e) => setMessage(e.target.value)} value={message} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </div>
            <div className="flex">
                <Button text="SEND MESSAGE" icon={<Send color="#FFFFFF" size={18} />} />
            </div>
        </div>
    );
}