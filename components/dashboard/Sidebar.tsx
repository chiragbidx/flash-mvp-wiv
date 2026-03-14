"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { name: "Projects", href: "/dashboard/projects", icon: "📁" },
  { name: "Tasks", href: "/dashboard/tasks", icon: "✅" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {sidebarLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors font-medium",
            pathname === link.href
              ? "bg-accent text-primary"
              : "text-muted-foreground"
          )}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          <span>{link.icon}</span>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;