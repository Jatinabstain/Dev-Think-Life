import React from "react";
import Link from "next/link";
import { MenuItem } from '@/types/types';

type MobileMenuProps = {
    menus: MenuItem[] | null; // Menu can be an array or null
};
export default function MobileMenu({ menus }: MobileMenuProps) {
    if (!menus || menus.length === 0) {
        return <p>No menu items available.</p>;
    }
    return (
        <div className="space-y-2 py-6">
            {menus.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 mobile_link block rounded-lg px-3 py-2 hover:bg-gray-50 `}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

