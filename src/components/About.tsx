import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutShort, pastor } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  return (
    <section id="apercu-a-propos" className="relative overflow-hidden bg-cream-50 pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-[1320px] items-end gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Portrait détouré, posé sur une forme signature à coin carré */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="relative mx-auto w-full max-w-[460px] lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="card-blob card-blob--tl absolute inset-x-0 bottom-0 top-16 bg-cream-200"
          />
          <img
            src={pastor.image}
            alt={`${pastor.name}, ${pastor.role}`}
            className="relative mx-auto block h-auto w-[88%] object-contain"
          />
        </motion.div>

        {/* Message : mission et doctrine */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ delay: 0.12 }}
          className="pb-16 sm:pb-20"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
            À propos
          </p>
          <h2 className="mt-2 max-w-[16ch] font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl">
            {aboutShort.title}
          </h2>

          <div className="mt-6 max-w-[54ch] space-y-4 font-body text-[15px] leading-relaxed text-ink-950/75">
            <p>{aboutShort.mission}</p>
            <p>{aboutShort.doctrine}</p>
          </div>

          <p className="mt-6 font-display text-lg italic text-bordeaux">{pastor.name}</p>

          <Link
            to="/a-propos"
            className="mt-6 inline-flex items-center gap-2 border-b border-bordeaux/40 pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:border-bordeaux hover:text-bordeaux-700"
          >
            Découvrir notre histoire
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
