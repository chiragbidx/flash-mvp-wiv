"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

type MobileNavProps = {
  fullName: string;
  email: string;
  initials: string;
};

export function MobileNav({ fullName, email, initials }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 rounded hover:bg-accent border"
        aria-label="Toggle menu"
        onClick={() => setOpen(v => !v)}
      >
        <Menu className="h-5 w-5" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex md:hidden" onClick={() => setOpen(false)}>
          <div className="w-64 bg-white h-full shadow-lg" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center gap-2">
              <span className="bg-primary text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {initials}
              </span>
              <div>
                <div className="font-semibold">{fullName}</div>
                <div className="text-xs text-muted-foreground">{email}</div>
              </div>
            </div>
            <div className="p-4">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;