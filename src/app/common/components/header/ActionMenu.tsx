import Link from "next/link";

export default function ActionMenu() {
    return (
        <>
            <Link href="http://portal.thinklife.com/" target="_blank" className="outline_btn">Login</Link>
            <Link href="https://quote.thinklife.com/" target="_blank" className="fill_btn">Get Started</Link>
        </>
    );
}