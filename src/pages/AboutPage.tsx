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
                L'Assemblée de Nkolmintag
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait et citation */}
      <section className="bg-cream-50 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-12 border-t border-ink-950/15 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
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

            <motion.blockquote
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              className="max-w-[20ch] font-display text-3xl font-semibold italic leading-[1.15] text-bordeaux sm:text-4xl lg:text-5xl"
            >
              {aboutPage.quote}
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Vision et croyances */}
      <section className="bg-cream-50 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="border-t border-ink-950/15 pt-8"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
              Ce que nous croyons
            </p>
            <h2 className="mt-2 max-w-[18ch] font-display text-3xl font-semibold leading-[1.05] text-ink-950 sm:text-4xl">
              Vision et croyances
            </h2>
          </motion.div>

          <div className="mt-10 columns-1 gap-12 md:columns-2">
            {aboutPage.vision.map((p, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                transition={{ delay: (i % 2) * 0.08 }}
                className={`mb-5 break-inside-avoid font-body text-[15px] leading-relaxed text-ink-950/75 ${
                  i === 0 ? dropCap : ""
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Le Pasteur */}
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
                Portrait
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
                {pastor.name}
              </h2>
            </div>
            <p className="max-w-[46ch] font-body text-[15px] leading-relaxed text-cream-100/80 lg:justify-self-end lg:text-right">
              {pastor.role} — appelé au ministère en 2003, installé le 31 mars 2024.
            </p>
          </motion.div>

          <div className="mt-10 max-w-[80ch] space-y-5 border-t border-cream-50/15 pt-8 font-body text-[15px] leading-relaxed text-cream-100/85">
            {aboutPage.pastorBio.map((p, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                transition={{ delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                Historique
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl">
                D'une maison de prière à une communauté
              </h2>
            </div>
            <p className="max-w-[46ch] font-body text-[15px] leading-relaxed text-ink-950/70 lg:justify-self-end lg:text-right">
              De l'arrivée du Message au Cameroun à aujourd'hui : six chapitres d'une même
              fidélité.
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
                className="grid gap-4 border-t border-ink-950/10 py-9 last:border-b md:grid-cols-[0.5fr_1.5fr] md:gap-12"
              >
                <div className="flex items-baseline gap-5">
                  <span className="w-10 shrink-0 font-display text-3xl italic text-bordeaux">
                    {numerals[i]}
                  </span>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink-950 sm:text-3xl">
                    {c.title}
                  </h3>
                </div>
                <p className="max-w-[60ch] font-body text-[15px] leading-relaxed text-ink-950/70">
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborateurs */}
      <section className="bg-bordeaux py-20 text-cream-50 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              À nos côtés
            </p>
            <h2 className="mt-2 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
              Les collaborateurs
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-14 border-t border-cream-50/15 pt-10 lg:grid-cols-2 lg:gap-16">
            {/* Conseil des diacres */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
            >
              <h3 className="font-display text-2xl font-semibold sm:text-[1.7rem]">
                Le Conseil des diacres
              </h3>
              <p className="mt-4 max-w-[52ch] font-body text-[15px] leading-relaxed text-cream-100/80">
                {aboutPage.deacons.intro}
              </p>

              <p className="mt-7 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400">
                Leurs missions
              </p>
              <ul className="mt-3 space-y-2.5">
                {aboutPage.deacons.missions.map((m) => (
                  <li
                    key={m}
                    className="flex gap-3 border-b border-cream-50/10 pb-2.5 font-body text-[15px] leading-snug text-cream-100/85"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                    {m}
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400">
                Pendant les jours de culte
              </p>
              <ul className="mt-3 space-y-2.5">
                {aboutPage.deacons.serviceDay.map((m) => (
                  <li
                    key={m}
                    className="flex gap-3 border-b border-cream-50/10 pb-2.5 font-body text-[15px] leading-snug text-cream-100/85"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* École du dimanche */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display text-2xl font-semibold sm:text-[1.7rem]">
                L'école du dimanche
              </h3>
              <p className="mt-1 font-body text-sm italic text-cream-100/60">
                « L'église de demain »
              </p>
              <p className="mt-4 max-w-[52ch] font-body text-[15px] leading-relaxed text-cream-100/80">
                {aboutPage.sundaySchool.intro}
              </p>

              <div className="mt-7">
                {aboutPage.sundaySchool.classes.map((c) => (
                  <div
                    key={c.name}
                    className="grid grid-cols-1 gap-x-6 gap-y-1.5 border-b border-cream-50/10 py-4 sm:grid-cols-[0.9fr_0.6fr_1.5fr] sm:items-baseline"
                  >
                    <p className="font-display text-lg font-semibold">{c.name}</p>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-gold-400">
                      {c.age}
                    </p>
                    <p className="font-body text-sm leading-relaxed text-cream-100/80">{c.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-body text-sm leading-relaxed text-cream-100/70">
                {aboutPage.sundaySchool.stats}
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-cream-100/80">
                <span className="font-display text-base font-semibold text-cream-50">
                  {aboutPage.sundaySchool.director}
                </span>{" "}
                — Directeur de l'école du dimanche. {aboutPage.sundaySchool.directorText}
              </p>
            </motion.div>
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