import Link from "next/link"

export default function Nav() {
    const links = [
        {
            name: 'Home',
            href: '/'
        }
    ]

    return (
        <>
            <nav className="hidden">
                { links.map((link) => 
                    <Link href={link.href} key={link.name}>{link.name}</Link>
                ) }
            </nav>
        </>
    )
}