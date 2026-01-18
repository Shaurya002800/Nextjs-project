// "use client";

// import { supabase } from "../lib/supabase";
// import Navbar from "../components/Navbar";
// import Protected from "@/components/Protected";

// export default function LandingPage() {
//   const signInWithGoogle = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: `${location.origin}/home`,
//       },
//     });
//   };

//   return (
//     <Protected>
//     <Navbar/>
//     <main style={{ padding: "60px" }}>
//       <h1>ModelArena</h1>

//       <p>
//         A competitive ML challenge platform where participants
//         submit models and climb the leaderboard. okay
//       </p>

//       <br />

//       <button onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//     </main>
//     </Protected>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import Navbar from "../components/Navbar";
import DashboardSection from "../components/DashboardSection";
import TimelineSection from "../components/TimelineSection";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <main className="h-screen overflow-y-auto scroll-smooth">
        {/* HOME */}
        <section id="home" className="min-h-screen p-12">
          <h1 className="text-4xl font-bold">ModelArena</h1>
          <p className="mt-4 text-neutral-600">
            Compete, submit models, and climb the leaderboard.
          </p>
        </section>

        {/* DASHBOARD (ONLY AFTER LOGIN) */}
        {isLoggedIn && <DashboardSection />}

        {/* TIMELINE */}
        <TimelineSection />
      </main>
    </>
  );
}
