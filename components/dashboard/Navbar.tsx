"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Overview", href: "/dashboard" },
  { name: "Reports", href: "/dashboard/reports" },
  { name: "Settings", href: "/dashboard/settings" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-6 h-14 px-4 bg-card border-b shadow-sm">
      <Link href="/dashboard" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-primary">
        <div className="grid size-8 place-items-center rounded-lg bg-primary text-background font-bold">M</div>
        Marketiq Portal
      </Link>
      <div className="flex-1" />
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors",
            pathname === link.href
              ? "bg-accent text-primary"
              : "text-muted-foreground"
          )}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;