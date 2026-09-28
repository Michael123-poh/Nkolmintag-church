import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MountainMark from "./MountainMark";
import { nav } from "../data/content";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = nav
      .filter((n) => n.href.startsWith("#"))
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-bordeaux/95 shadow-bordeaux-sm backdrop-blur-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <a href="#main" className="skip-link">
          Aller au contenu principal
        </a>
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3 text-cream-50">
            <MountainMark className="h-9 w-9" color="#c9a24b" />
            <span className="font-sans text-lg font-semibold tracking-wide">
              NKT
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const isPageLink = !item.href.startsWith("#");
              const to = isPageLink ? item.href : isHome ? item.href : `/${item.href}`;
              const isCurrent = isPageLink
                ? location.pathname === item.href
                : isHome && active === item.href;
              return (
                <Link
                  key={item.href}
                  to={to}
                  aria-current={isCurrent ? "page" : undefined}
                  className="nav-underline font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-cream-100/90 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-cream-50 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bordeaux-950 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-3 text-cream-50">
                <MountainMark className="h-8 w-8" color="#c9a24b" />
                <span className="font-sans text-base font-semibold tracking-wide">
                  NKT
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-cream-50"
                aria-label="Fermer le menu"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-10">
              {nav.map((item, i) => {
                const isPageLink = !item.href.startsWith("#");
                const to = isPageLink ? item.href : isHome ? item.href : `/${item.href}`;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl text-cream-50 hover:text-gold-400"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}