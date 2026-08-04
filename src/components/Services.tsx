import { motion } from "framer-motion";
import MountainMark from "./MountainMark";
import { services } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section id="cultes" className="relative bg-cream-50 py-20 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
              Vie d'église
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
              Nos temps de rassemblement
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="max-w-[46ch] font-body text-[15px] leading-tight text-ink-950/70 lg:justify-self-end lg:text-right"
          >
            Chaque semaine, notre communauté se retrouve pour prier, apprendre et grandir
            ensemble — que vous soyez de passage à Douala ou membre de longue date.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {services.map((s, i) => {
            const spanClass =
              i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "lg:col-span-12";
            const dark = i === 0;
            const blobCorner = i === 0 ? "card-blob--br" : i === 1 ? "card-blob--tl" : "card-blob--bl";
            return (
              <motion.article
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                transition={{ delay: i * 0.1 }}
                className={`card-blob ${blobCorner} group relative min-h-[240px] overflow-hidden ${spanClass} ${
                  dark ? "bg-bordeaux text-cream-50" : "bg-cream-200 text-ink-950"
                }`}
              >
                {!dark && (
                  <>
                    <img
                      src={s.image}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 h-full w-3/4 object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        maskImage:
                          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.85) 55%, black 75%)",
                        WebkitMaskImage:
                          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.85) 55%, black 75%)",
                      }}
                    />
                  </>
                )}
                <div className="relative flex h-full flex-col p-7 sm:p-9">
                  <MountainMark
                    className="h-8 w-8 transition-transform duration-500 group-hover:-translate-y-1"
                    color={dark ? "#c9a24b" : "#5c1826"}
                  />
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${
                      dark ? "text-gold-400" : "text-bordeaux"
                    }`}
                  >
                    {s.time}
                  </p>
                  <p
                    className={`mt-2 max-w-[32ch] font-body text-[15px] leading-tight ${
                      dark ? "text-cream-100/85" : "text-ink-950/70"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
