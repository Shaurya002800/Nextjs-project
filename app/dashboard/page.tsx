import Protected from "../../components/Protected";
import Navbar from "../../components/Navbar";

export default function DashboardPage() {
  return (
    <Protected>
      <Navbar />
      <main style={{ padding: "40px" }}>
        <h1>Dashboard</h1>
      </main>
    </Protected>
  );
}
