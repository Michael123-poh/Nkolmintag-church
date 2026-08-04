import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { sermons } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function PredicationsPage() {
  return (
    <section className="bg-cream-50 pb-20 pt-36 sm:pb-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <Link
          to="/#medias"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:text-bordeaux-700"
        >
          <ArrowLeft size={14} />
          Retour à l'accueil
        </Link>

        <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
          Médiathèque
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
          Toutes les prédications
        </h1>
        <p className="mt-2 max-w-[55ch] font-body text-[15px] leading-tight text-ink-950/70">
          Réécoutez les messages prêchés à Nkolmintage, semaine après semaine.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s, i) => (
            <motion.article
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              transition={{ delay: (i % 3) * 0.08 }}
              className="card-blob card-blob--tl group overflow-hidden bg-cream-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-950/25" />
                <button
                  type="button"
                  aria-label={`Lire : ${s.title}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/90 text-bordeaux shadow-bordeaux-sm transition-transform duration-300 group-hover:scale-110">
                    <Play size={18} fill="currentColor" />
                  </span>
                </button>
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-semibold leading-tight text-ink-950">
                  {s.title}
                </h2>
                <p className="mt-1 font-body text-sm leading-tight text-ink-950/70">
                  {s.speaker} · {s.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
