"use client";

import { useState } from "react";

export default function DashboardSection() {
  const [hasTeam, setHasTeam] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      id="dashboard"
      className="min-h-screen w-full bg-neutral-950 text-white flex flex-col gap-12 p-12"
    >
      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p className="text-neutral-400">
          Team management and competition overview
        </p>
      </div>

      {/* TEAM SECTION */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-medium">Team</h2>

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
              You are not part of any team yet, create a team! If you are a part of a team,please join via a code. 
            </p>
          </div>
        )}

        {hasTeam && (
          <div className="flex flex-col gap-8">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="w-fit rounded-lg bg-neutral-800 px-6 py-2 hover:bg-neutral-700 transition"
            >
              {showInfo ? "Hide Team Info" : "View Team Info"}
            </button>

            {showInfo && (
              <div className="flex flex-col gap-8">
                <div className="rounded-xl border border-neutral-800 p-6">
                  <h3 className="text-xl font-medium">Team Alpha</h3>
                  <p className="text-neutral-400">Code: ALPHA123</p>
                </div>

                <div className="rounded-xl border border-neutral-800 p-6">
                  <h4 className="text-lg font-medium">Members</h4>
                  <ul className="text-neutral-400">
                    <li>• member1@email.com</li>
                    <li>• member2@email.com</li>
                    <li>• member3@email.com</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-neutral-800 p-6">
                  <h4 className="text-lg font-medium">Leaderboard</h4>
                  <div className="flex justify-between">
                    <span>#3</span>
                    <span>82 pts</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
