import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import SignUpSwiper from "./pages/register";
import RentPage from "./pages/rent";
import HomePage from "./components/Home/home";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<RentPage />} path="/Rent" />
      <Route element={<SignUpSwiper />} path="/register" />
      <Route element={<HomePage />} path="/Home" />
    </Routes>
  );
}

export default App;
