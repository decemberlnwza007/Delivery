import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <LoginForm />
      </div>
    </div>
  );
}
