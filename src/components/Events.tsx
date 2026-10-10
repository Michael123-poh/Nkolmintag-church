import { motion } from "framer-motion";
import { events } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Events() {
  return (
    <section id="evenements" className="bg-cream-50 py-20 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
            À l'agenda
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            Événements à venir
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              transition={{ delay: (i % 6) * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-cream-200 shadow-bordeaux-sm transition-shadow duration-300 hover:shadow-bordeaux"
            >
              <div className="rounded-t-2xl bg-bordeaux px-7 py-4 text-center">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {e.month}
                </p>
              </div>
              <div className="flex flex-col p-6">
                <p className="font-display text-sm font-semibold text-bordeaux/70">
                  {e.day} {e.month}
                </p>
                <h3 className="mt-0.5 font-display text-xl font-semibold leading-tight text-ink-950">
                  {e.title}
                </h3>
                <p className="mt-1.5 font-body text-sm leading-tight text-ink-950/70">
                  {e.description}
                </p>
                <button
                  type="button"
                  className="mt-5 w-fit rounded-sm bg-gold-500 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink-950 transition-all duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  S'inscrire
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
