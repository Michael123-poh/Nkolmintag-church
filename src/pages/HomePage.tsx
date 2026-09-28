import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Media from "../components/Media";
import Events from "../components/Events";
import Join from "../components/Join";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Media />
      <Events />
      <Join />
    </>
  );
}