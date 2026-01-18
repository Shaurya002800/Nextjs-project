"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="w-full border-b border-neutral-800 bg-black">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-white">

        {/* Left links */}
        <div className="flex gap-8">
          <Link href="/home">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        {/* Right logout */}
        <button
          onClick={handleLogout}
          className="rounded-md bg-red-500 px-4 py-1.5 text-sm
                     hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}
