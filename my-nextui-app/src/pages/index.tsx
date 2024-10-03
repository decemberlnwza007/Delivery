import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import LoginForm from "@/components/Login/LoginForm";
import '@/styles/main.css'

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
      <div className="bg">
        <LoginForm />
    </div>
  );
}
