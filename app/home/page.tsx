import Protected from "../../components/Protected";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <Protected>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">Welcome to ModelArena</h1>
        <p className="mt-4 text-gray-400">
          Compete, submit models, and climb the leaderboard.
        </p>
      </main>
    </Protected>
  );
}
