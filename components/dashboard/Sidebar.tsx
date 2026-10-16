"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
    },
    {
        title: "Products",
        href: "/dashboard/products",
    },
    {
        title: "Users",
        href: "/dashboard/users",
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="min-h-screen w-64 border-r border-base-300 bg-base-200 p-4">
            <div className="mb-6 px-4">
                <h2 className="text-xl font-bold">Admin Panel</h2>

                <p className="text-sm text-base-content/60">
                    Marketplace management
                </p>
            </div>

            <nav aria-label="Dashboard navigation">
                <ul className="menu w-full gap-1 rounded-box">
                    {menuItems.map((item) => {
                        const isActive =
                            item.href === "/dashboard"
                                ? pathname === item.href
                                : pathname.startsWith(item.href);

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={isActive ? "active font-semibold" : ""}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}