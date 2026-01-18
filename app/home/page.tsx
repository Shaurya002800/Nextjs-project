// import Protected from "../../components/Protected";
// import Navbar from "../../components/Navbar";

// export default function HomePage() {
//   return (
//     <Protected>
//       <Navbar />
//       <main className="p-10">
//         <h1 className="text-3xl font-bold">Welcome to ModelArena</h1>
//         <p className="mt-4 text-gray-400">
//           Compete, submit models, and climb the leaderboard.
//         </p>
//       </main>
//     </Protected>
//   );
// }


import Protected from "../../components/Protected";
import Navbar from "../../components/Navbar";
import DashboardSection from "../../components/DashboardSection";

export default function HomePage() {
  return (
    <Protected>
      <Navbar />

      {/* SCROLL CONTAINER */}
      <main className="h-screen overflow-y-auto scroll-smooth">

        {/* HOME SECTION */}
        <section
          id="home"
          className="min-h-screen p-10 flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">
            Welcome to ModelArena
          </h1>

          <p className="text-gray-400 max-w-xl">
            Compete, submit models, and climb the leaderboard.
          </p>
        </section>

        {/* DASHBOARD SECTION */}
        <DashboardSection />

      </main>
    </Protected>
  );
}
