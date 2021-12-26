import { Copy } from "iconsax-react";
import React from "react";

export default function Contact({ contact }) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white">
            <div className="flex justify-center">
                <div className="flex p-2 rounded-full bg-primary">
                    { contact.icon }
                </div>
            </div>
            { contact.items.map((item, key) => (
                <div key={key} className="flex justify-between gap-4">
                    <p className="font-bold">{ item.title }</p>
                    <div className="flex items-center gap-4">
                        <p>{ item.value }</p>
                        <div onClick={ () => navigator.clipboard.writeText(item.value) } className="flex cursor-pointer">
                            <Copy color="#655af3" />
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
}