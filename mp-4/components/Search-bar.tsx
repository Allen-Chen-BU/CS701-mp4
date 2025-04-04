'use client'
import { getIcon } from "../lib/getIcon";
import { Icon } from "@/types";

interface SearchBarProps {
    setContent: (val: Icon[]) => void
}

export default function SearchBar(props: SearchBarProps) {
    function handleClick() {
        const input = (document.querySelector("#userInput") as HTMLInputElement).value;
        getIcon(input).then((data) => {
            props.setContent(data);
        });
    }

    return (
        <div className="justify-self-center h-12">
            <input id="userInput" className="border rounded-md mr-2 p-1 h-full"></input>
            <button onClick={handleClick} className="bg-sky-400 p-1 rounded-md h-full w-12">&#x1F50D;&#xFE0E;</button>
        </div>
    )
}