import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Play, Search } from "lucide-react";
import MountainMark from "../components/MountainMark";
import { services, sermons } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CultesPage() {
  const [query, setQuery] = useState("");
  const [speaker, setSpeaker] = useState("Tous");

  const speakers = useMemo(
    () => ["Tous", ...Array.from(new Set(sermons.map((s) => s.speaker)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sermons.filter((s) => {
      const matchesSpeaker = speaker === "Tous" || s.speaker === speaker;
      const matchesQuery =
        q === "" || s.title.toLowerCase().includes(q) || s.speaker.toLowerCase().includes(q);
      return matchesSpeaker && matchesQuery;
    });
  }, [query, speaker]);

  const featured = sermons[0];

  return (
    <>
      {/* En-tête de page */}
      <section className="bg-cream-50 pb-14 pt-36 sm:pb-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:text-bordeaux-700"
          >
            <ArrowLeft size={14} />
            Retour à l'accueil
          </Link>

          <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
            Vie d'église
          </p>
          <h1 className="mt-2 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
            Nos cultes & nos rencontres
          </h1>
          <p className="mt-4 max-w-[58ch] font-body text-[15px] leading-relaxed text-ink-950/70">
            Chaque semaine, notre communauté se retrouve pour prier, communier et grandir
            ensemble. Retrouvez ici nos jours de rassemblement et réécoutez les messages qui y
            sont partagés.
          </p>
        </div>
      </section>

      {/* Jours de culte — liste éditoriale, sans cards */}
      <section className="bg-cream-50 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="flex items-baseline justify-between gap-6 border-t border-ink-950/15 pt-8"
          >
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
              Jours de culte
            </h2>
            <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-950/40 sm:block">
              Programme hebdomadaire
            </p>
          </motion.div>

          <div className="mt-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={reveal}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-ink-950/10 py-8 sm:grid-cols-[1.2fr_0.8fr_1.8fr] sm:items-baseline"
              >
                <div className="flex items-center gap-3">
                  <MountainMark className="h-5 w-5 shrink-0" color="#5c1826" />
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink-950 sm:text-[1.65rem]">
                    {s.title}
                  </h3>
                </div>
                <p className="font-display text-xl text-bordeaux sm:text-2xl">{s.time}</p>
                <p className="max-w-[48ch] font-body text-[15px] leading-relaxed text-ink-950/70">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bibliothèque de prédications */}
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
                Bibliothèque
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
                Toutes les prédications
              </h2>
            </div>
            <p className="max-w-[46ch] font-body text-[15px] leading-relaxed text-cream-100/80 lg:justify-self-end lg:text-right">
              Réécoutez chaque message ou téléchargez-le en PDF pour le méditer, le partager ou
              le retrouver hors ligne.
            </p>
          </motion.div>

          {/* Message vedette — seule carte de la section */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="card-blob card-blob--tr group relative mt-10 aspect-[4/3] overflow-hidden sm:aspect-[3/1]"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400">
                Message le plus récent
              </p>
              <h3 className="mt-1 max-w-[26ch] font-display text-2xl font-semibold leading-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-1 font-body text-sm text-cream-100/80">
                {featured.speaker} · {featured.date}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  aria-label={`Écouter : ${featured.title}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-950 transition-all duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  <Play size={13} fill="currentColor" />
                  Écouter
                </button>
                <a
                  href={featured.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-sm border border-cream-50/40 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Download size={13} />
                  PDF
                </a>
              </div>
            </div>
          </motion.article>

          {/* Recherche et filtres par prédicateur */}
          <div className="mt-12 flex flex-col gap-5 border-t border-cream-50/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative w-full sm:max-w-[320px]">
              <Search
                size={15}
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-cream-100/50"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un message ou un prédicateur"
                className="w-full border-b border-cream-50/25 bg-transparent py-2 pl-6 font-body text-sm text-cream-50 placeholder:text-cream-100/45 outline-none transition-colors focus:border-gold-400"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {speakers.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSpeaker(name)}
                  className={`rounded-full border px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    speaker === name
                      ? "border-gold-400 bg-gold-400 text-ink-950"
                      : "border-cream-50/25 text-cream-100/75 hover:border-gold-400 hover:text-gold-400"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Liste des prédications — lignes, pas de cards */}
          <div className="mt-4">
            {filtered.length === 0 ? (
              <p className="border-t border-cream-50/10 py-10 font-body text-sm text-cream-100/70">
                Aucun message ne correspond à votre recherche. Essayez un autre mot-clé ou un
                autre prédicateur.
              </p>
            ) : (
              filtered.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reveal}
                  transition={{ delay: (i % 6) * 0.06 }}
                  className="flex flex-col gap-3 border-t border-cream-50/10 py-6 last:border-b sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-400">
                      {s.date}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold leading-tight sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 font-body text-sm text-cream-100/70">{s.speaker}</p>
                  </div>
                  <div className="flex shrink-0 gap-2.5">
                    <button
                      type="button"
                      aria-label={`Écouter : ${s.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 transition-colors hover:border-gold-400 hover:text-gold-400"
                    >
                      <Play size={15} fill="currentColor" />
                    </button>
                    <a
                      href={s.pdfUrl}
                      download
                      aria-label={`Télécharger en PDF : ${s.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 transition-colors hover:border-gold-400 hover:text-gold-400"
                    >
                      <Download size={15} />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
