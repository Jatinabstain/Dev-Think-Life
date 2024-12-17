import Link from "next/link";

export default function ActionMenu() {
    return (
        <>
            <Link href="#" className="outline_btn">Login</Link>
            <Link href="#" className="fill_btn">Get Started</Link>
        </>
    );
}