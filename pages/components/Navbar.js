import Navitem from "./Navitem"
export default function Navbar({ pageTitle }) {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My Website</span>
            </div>
          {/* Menu Items */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    {/* Menu Links */}
                    <Navitem href="/" text="Home" isActive={pageTitle === "home"} />
                    <Navitem href="/essays" text="Essays" isActive={pageTitle === "essays"} />
                    <Navitem href="/projects" text="Projects" isActive={pageTitle === "projects"} />
                </div>
            </div>

        </nav>

    )
}
