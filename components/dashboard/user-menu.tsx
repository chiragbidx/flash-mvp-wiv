"use client";

import { useState } from "react";

type UserMenuProps = {
  fullName: string;
  email: string;
  initials: string;
  signOutAction: () => Promise<void>;
};

export function UserMenu({
  fullName,
  email,
  initials,
  signOutAction,
}: UserMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent hover:bg-accent/80"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="bg-primary text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {initials}
        </span>
        <span className="font-semibold">{fullName}</span>
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-50 min-w-[220px]"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex flex-col px-4 py-3 border-b">
            <span className="font-semibold">{fullName}</span>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
          <button
            className="w-full text-left px-4 py-2 hover:bg-muted text-sm rounded-b-md transition"
            onClick={async () => {
              setOpen(false);
              await signOutAction();
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;