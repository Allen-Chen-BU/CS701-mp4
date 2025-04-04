import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
    return (
        <>
            <header className="my-4 bg-sky-300 mt-0 h-12 content-center">
                <Link href={'/'}><h1 className="text-2xl ml-4 font-bold">Search Icon</h1></Link>
                <Nav></Nav>
            </header>
        </>
    )
}