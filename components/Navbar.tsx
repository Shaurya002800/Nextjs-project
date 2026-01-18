// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { supabase } from "../lib/supabase";

// export default function Navbar() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/");
//   };

//   return (
//     <nav className="w-full border-b border-neutral-800 bg-black">
//       <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-white">

//         {/* Left links */}
//         <div className="flex gap-8">
//           <Link href="/home" className="hover:text-gray-300 transition">
//             Home
//           </Link>
//           <Link href="#dashboard" className="hover:text-gray-300 transition">
//             Dashboard
//           </Link>
//           <Link href="#timeline" className="hover:text-gray-300 transition">
//             Timeline
//           </Link>
//           <Link href="#faq" className="hover:text-gray-300 transition">
//             FAQ
//           </Link>
//         </div>

//         {/* Right logout */}
//         <button
//           onClick={handleLogout}
//           className="rounded-md bg-red-500 px-4 py-1.5 text-sm
//                      hover:bg-red-600 transition"
//         >
//           Logout
//         </button>

//       </div>
//     </nav>
//   );
// }


"use client";

import { supabase } from "../lib/supabase";

export default function Navbar({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">

        {/* LEFT */}
        <div className="flex gap-6">
          <button onClick={() => scrollTo("home")}>Home</button>

          {isLoggedIn && (
            <button onClick={() => scrollTo("dashboard")}>
              Dashboard
            </button>
          )}

          <button onClick={() => scrollTo("timeline")}>Timeline</button>
          <button onClick={() => scrollTo("faq")}>FAQ</button>
        </div>

        {/* RIGHT */}
        {!isLoggedIn ? (
          <button
            onClick={login}
            className="rounded-md bg-black px-4 py-1.5 text-white"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className="rounded-md bg-red-500 px-4 py-1.5 text-white"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
