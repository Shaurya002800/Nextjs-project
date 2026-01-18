// import Protected from "../../components/Protected";
// import Navbar from "../../components/Navbar";

// export default function DashboardPage() {
//   return (
//     <Protected>
//       <Navbar />
//       <main style={{ padding: "40px" }}>
//         <h1>Dashboard</h1>
//       </main>
//     </Protected>
//   );
// }


"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Protected from "../../components/Protected";

export default function DashboardPage() {
  const [hasTeam, setHasTeam] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Protected>
      <Navbar />

      <main className="min-h-screen w-full bg-neutral-950 text-white flex flex-col gap-12 p-12">

        {/* ================= DASHBOARD HEADER ================= */}
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p className="text-neutral-400">
            Team management and competition overview
          </p>
        </section>

        {/* ================= TEAM SECTION ================= */}
        <section className="flex flex-col gap-8">

          <h2 className="text-2xl font-medium">Team</h2>

          {/* ===== NO TEAM STATE ===== */}
          {!hasTeam && (
            <div className="flex flex-col gap-6">

              <div className="flex gap-6">
                <button className="rounded-lg bg-orange-600 px-6 py-3 hover:bg-orange-700 transition">
                  Create Team
                </button>

                <button className="rounded-lg border border-neutral-700 px-6 py-3 hover:bg-neutral-900 transition">
                  Join via Code
                </button>
              </div>

              <p className="text-neutral-400 max-w-xl">
                You are not part of any team yet. Create a new team or join an
                existing one using a team code.
              </p>
            </div>
          )}

          {/* ===== HAS TEAM STATE ===== */}
          {hasTeam && (
            <div className="flex flex-col gap-8">

              {/* Info Button */}
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="w-fit rounded-lg bg-neutral-800 px-6 py-2 hover:bg-neutral-700 transition"
              >
                {showInfo ? "Hide Team Info" : "View Team Info"}
              </button>

              {/* TEAM INFO */}
              {showInfo && (
                <div className="flex flex-col gap-8">

                  {/* Team Details */}
                  <div className="rounded-xl border border-neutral-800 p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-medium">Team Alpha</h3>
                    <p className="text-neutral-400">
                      Team Code: <span className="text-white">ALPHA123</span>
                    </p>
                  </div>

                  {/* Members */}
                  <div className="rounded-xl border border-neutral-800 p-6 flex flex-col gap-4">
                    <h4 className="text-lg font-medium">Members</h4>
                    <ul className="flex flex-col gap-2 text-neutral-400">
                      <li>• member1@email.com</li>
                      <li>• member2@email.com</li>
                      <li>• member3@email.com</li>
                    </ul>
                  </div>

                  {/* Leaderboard */}
                  <div className="rounded-xl border border-neutral-800 p-6 flex flex-col gap-4">
                    <h4 className="text-lg font-medium">Leaderboard</h4>

                    <div className="flex justify-between text-neutral-400">
                      <span>Rank</span>
                      <span>Score</span>
                    </div>

                    <div className="flex justify-between text-white">
                      <span>#3</span>
                      <span>82 pts</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

        </section>

      </main>
    </Protected>
  );
}
