// import { useState, useEffect } from "react";
// import Loading from "../Loading";
import Navbar from "../navbar";
import HelloWorld from "../typing";

export default function HomePage() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <div className="homepage-container">
            <HelloWorld />
            <Navbar />
            <div className="content">
            </div>
        </div>
    );
}
