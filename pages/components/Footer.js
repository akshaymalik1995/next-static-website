import Navitem from "./Navitem"
export default function Footer() {
    return (
        <footer className="flex bg-black items-center justify-center w-full h-24 border-t">
            <Navitem href="/" text="Home" />
            <Navitem href="/essays" text="Essays" />
            <Navitem href="/projects" text="Projects" />
        </footer>
    )
}