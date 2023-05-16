import Link from "next/link";

export default function Navitem({ href, text, isActive }) {
    return (
        <Link className={`block p-2 mt-4 ${isActive ? "bg-gray-700" : ''} lg:inline-block lg:mt-0 text-teal-200 text-white mr-4`} href={href}>
                {text}
        </Link>
    )
}