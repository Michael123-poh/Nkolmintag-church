import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-dvh items-end overflow-hidden bg-ink-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=1200&fit=crop&q=80)` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-bordeaux-950/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pb-16 pt-40 sm:pb-20 lg:pb-24">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="max-w-[820px] font-display text-[2.5rem] font-semibold leading-[1.05] text-cream-50 sm:text-[3.4rem] lg:text-[4rem]"
        >
          Bienvenue à Nkolmintag.
          <br />
          Unissez-vous à nous dans la foi.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-6"
        >
          <a
            href="#medias"
            className="group inline-flex items-center gap-3 border-b border-gold-400/60 pb-1 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/90 text-ink-950 transition-transform duration-300 group-hover:scale-110">
              <Play size={14} fill="currentColor" />
            </span>
            Regarder en direct
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-10 border-t border-cream-50/15 pt-5"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Ce dimanche
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {[
              { label: "Culte matinal", time: "09h" },
              { label: "Culte du soir", time: "18h" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex min-w-[180px] items-center gap-4 rounded-sm bg-cream-50/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-cream-50/15"
              >
                <span className="font-display text-3xl text-cream-50">{s.time}</span>
                <span className="font-sans text-xs font-medium uppercase tracking-wide text-cream-100/80">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
