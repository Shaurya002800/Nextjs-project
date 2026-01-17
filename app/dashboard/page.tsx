"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get session after OAuth redirect
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/");
      } else {
        setUser(data.session.user);
      }
      setLoading(false);
    });

    // Listen for future auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.push("/");
        } else {
          setUser(session.user);
          setLoading(false);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <main style={{ padding: "40px" }}>
      <Navbar />
      <h1>Dashboard</h1>
      <p>Logged in as: {user.email}</p>
    </main>
  );
}
