import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/team">Team</Link> |{" "}
      <Link href="/submit">Submit</Link> |{" "}
      <Link href="/leaderboard/live">Live</Link> |{" "}
      <Link href="/leaderboard/final">Final</Link>
    </nav>
  );
}
