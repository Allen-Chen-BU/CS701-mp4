import Nav from "./Nav";

export default function Header() {
    return (
        <>
            <header className="my-4 bg-sky-300 mt-0 h-12 content-center">
                <h1 className="text-2xl ml-4 font-bold">Search Icon</h1>
                <Nav></Nav>
            </header>
        </>
    )
}