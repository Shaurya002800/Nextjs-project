"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 bg-black">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-6 text-white">
        <div className="flex gap-8">
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/team" className="nav-link">
            Team
          </Link>
          <Link href="/submit" className="nav-link">
            Submit
          </Link>
          <Link href="/live" className="nav-link">
            Live
          </Link>
          <Link href="/final" className="nav-link">
            Final
          </Link>
        </div>
      </div>
    </nav>
  );
}
