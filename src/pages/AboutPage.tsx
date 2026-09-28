import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { aboutPage, pastor } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const numerals = ["I", "II", "III", "IV", "V", "VI"];

const dropCap =
  "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-bordeaux";

export default function AboutPage() {
  return (
    <>
      {/* Ouverture : titre et chapô */}
      <section className="bg-cream-50 pb-14 pt-36 sm:pb-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:text-bordeaux-700"
          >
            <ArrowLeft size={14} />
            Retour à l'accueil
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                À propos
              </p>
              <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.02] text-ink-950 sm:text-6xl lg:text-7xl">
                L'histoire de l'église Nkolmintag
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Double page : portrait, citation, mission et doctrine */}
      <section className="bg-cream-50 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-12 border-t border-ink-950/15 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.figure
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              className="mx-auto w-full max-w-[440px] lg:mx-0"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="card-blob card-blob--tl absolute inset-x-0 bottom-0 top-14 bg-cream-200"
                />
                <img
                  src={pastor.image}
                  alt={`${pastor.name}, ${pastor.role}`}
                  className="relative mx-auto block h-auto w-[88%] object-contain"
                />
              </div>
              <figcaption className="mt-4 border-t border-ink-950/15 pt-3">
                <p className="font-display text-lg font-semibold text-ink-950">{pastor.name}</p>
                <p className="font-body text-sm text-ink-950/60">{pastor.role}</p>
              </figcaption>
            </motion.figure>

            <div>
              <motion.blockquote
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={reveal}
                className="max-w-[22ch] font-display text-3xl font-semibold italic leading-[1.15] text-bordeaux sm:text-4xl lg:text-5xl"
              >
                {aboutPage.quote}
              </motion.blockquote>

              <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reveal}
                >
                  <h2 className="border-b border-ink-950/15 pb-3 font-display text-2xl font-semibold text-ink-950">
                    Notre mission
                  </h2>
                  <div className="mt-5 space-y-4 font-body text-[15px] leading-relaxed text-ink-950/75">
                    {aboutPage.mission.map((p, i) => (
                      <p key={i} className={i === 0 ? dropCap : undefined}>
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reveal}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="border-b border-ink-950/15 pb-3 font-display text-2xl font-semibold text-ink-950">
                    Notre doctrine
                  </h2>
                  <div className="mt-5 space-y-4 font-body text-[15px] leading-relaxed text-ink-950/75">
                    {aboutPage.doctrine.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historique : chapitres */}
      <section className="bg-bordeaux py-20 text-cream-50 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Historique
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
                D'une maison de prière à une communauté
              </h2>
            </div>
            <p className="max-w-[46ch] font-body text-[15px] leading-relaxed text-cream-100/80 lg:justify-self-end lg:text-right">
              Les débuts du père de notre pasteur, les premiers rassemblements, puis la transmission
              de l'œuvre : quatre chapitres d'une même fidélité.
            </p>
          </motion.div>

          <div className="mt-12">
            {aboutPage.history.map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                transition={{ delay: (i % 4) * 0.06 }}
                className="grid gap-4 border-t border-cream-50/15 py-9 last:border-b md:grid-cols-[0.5fr_1.5fr] md:gap-12"
              >
                <div className="flex items-baseline gap-5">
                  <span className="w-10 shrink-0 font-display text-3xl italic text-gold-400">
                    {numerals[i]}
                  </span>
                  <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    {c.title}
                  </h3>
                </div>
                <p className="max-w-[60ch] font-body text-[15px] leading-relaxed text-cream-100/80">
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl">
            Venez vivre cette histoire avec nous
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              to="/cultes"
              className="inline-flex items-center gap-2 border-b border-bordeaux/40 pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:border-bordeaux hover:text-bordeaux-700"
            >
              Nos jours de culte
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/#rejoindre"
              className="inline-flex items-center gap-2 border-b border-bordeaux/40 pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:border-bordeaux hover:text-bordeaux-700"
            >
              Nous rejoindre
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
