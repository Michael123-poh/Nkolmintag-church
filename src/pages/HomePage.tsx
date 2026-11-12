import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Media from "../components/Media";
import Events from "../components/Events";
import Join from "../components/Join";

export default function HomePage() {
  const { state, key } = useLocation();
  const target = (state as { scrollTo?: string } | null)?.scrollTo;

  useEffect(() => {
    if (!target) return;
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [target, key]);

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
