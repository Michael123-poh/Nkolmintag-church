import { motion } from "framer-motion";
import { Play, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { sermons } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Media() {
  return (
    <section id="medias" className="bg-bordeaux py-20 text-cream-50 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Médiathèque
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Médias</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="card-blob card-blob--tr group relative aspect-video overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=960&h=540&fit=crop&q=80"
              alt="Pasteur Jean-Marc Ondoa prêchant lors du culte dominical"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink-950/30" />
            <button
              type="button"
              aria-label="Lire le dernier sermon"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-50/90 text-bordeaux shadow-bordeaux transition-transform duration-300 group-hover:scale-110">
                <Play size={22} fill="currentColor" />
              </span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-950/80 to-transparent p-6">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400">
                Sermon récent
              </p>
              <p className="mt-0.5 font-display text-xl leading-tight">{sermons[0].title}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ delay: 0.15 }}
            className="card-blob card-blob--bl flex flex-col justify-between bg-bordeaux-900/60 p-7"
          >
            <ul className="space-y-3">
              {sermons.slice(0, 3).map((s) => (
                <li key={s.title} className="border-b border-cream-50/10 pb-3 last:border-0 last:pb-0">
                  <p className="font-display text-lg leading-tight">{s.title}</p>
                  <p className="mt-0.5 font-body text-sm leading-tight text-cream-100/70">
                    {s.speaker} · {s.date}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                to="/predications"
                className="inline-flex items-center justify-between gap-2 rounded-sm bg-gold-500 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-950 transition-all duration-200 hover:bg-gold-400 active:scale-[0.98]"
              >
                Voir toutes les prédications
                <ArrowRight size={14} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 self-start border-b border-gold-400/60 pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-400 transition-colors hover:border-gold-400 hover:text-cream-50"
              >
                <Download size={14} />
                Télécharger le guide d'étude (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
