'use client'
import { ChangeEvent, useState } from "react";
import { getIcon } from "../lib/getIcon";
import { Icon } from "@/types";

interface SearchBarProps {
    setContent: (val: Icon[]) => void
}

export default function SearchBar(props: SearchBarProps) {
    const [userInput, setUserInput] = useState<string>("");

    function handleClick() {
        getIcon(userInput).then((data) => {
            props.setContent(data);
        });
    }

    function handleInput(e: ChangeEvent) {
        const val = (e.target as HTMLInputElement).value;
        setUserInput(val);
    }

    return (
        <div className="justify-self-center h-12">
            <input className="border rounded-md mr-2 p-1 h-full" onChange={(e) => {handleInput(e)}}></input>
            <button onClick={handleClick} className="bg-sky-400 p-1 rounded-md h-full w-12">&#x1F50D;&#xFE0E;</button>
        </div>
    )
}