"use client" //변경될 것들이 필요하다면 작성
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About US</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
}