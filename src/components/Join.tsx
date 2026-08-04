import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { contact } from "../data/content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Join() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Merci d'indiquer une adresse email valide.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section id="rejoindre" className="bg-cream-200 py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
            Nous rejoindre
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink-950 sm:text-5xl">
            Rejoignez-nous
          </h2>
          <p className="mt-3 max-w-[46ch] font-body text-[15px] leading-tight text-ink-950/70">
            Que vous cherchiez une communauté, un lieu de service ou simplement un endroit
            pour prier, notre porte vous est ouverte à Nkolmintage.
          </p>

          <div className="mt-6 overflow-hidden rounded-sm border border-ink-950/10">
            <iframe
              title="Localisation de l'église Nkolmintage à Douala"
              src={contact.mapEmbed}
              className="h-64 w-full grayscale-[20%]"
              loading="lazy"
            />
          </div>
          <div className="mt-3 flex items-start gap-2 font-body text-sm leading-tight text-ink-950/70">
            <MapPin size={16} className="mt-0.5 shrink-0 text-bordeaux" />
            <span>{contact.address}</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ delay: 0.15 }}
          className="rounded-sm bg-bordeaux p-7 text-cream-50 sm:p-9"
        >
          <h3 className="font-display text-2xl font-semibold">Restez connectés</h3>
          <p className="mt-2 font-body text-sm leading-tight text-cream-100/80">
            Recevez les annonces, les horaires spéciaux et les nouveautés médias directement
            par email.
          </p>

          {submitted ? (
            <p className="mt-6 font-sans text-sm font-medium text-gold-400">
              Merci ! Vous recevrez bientôt nos prochaines actualités.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-3">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nom"
                  className="w-full rounded-sm border border-cream-50/25 bg-transparent px-4 py-3 font-body text-sm text-cream-50 placeholder:text-cream-100/50 outline-none transition-colors focus:border-gold-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Email"
                  aria-invalid={!!error}
                  aria-describedby={error ? "email-error" : undefined}
                  className="w-full rounded-sm border border-cream-50/25 bg-transparent px-4 py-3 font-body text-sm text-cream-50 placeholder:text-cream-100/50 outline-none transition-colors focus:border-gold-400"
                />
                {error && (
                  <p id="email-error" className="mt-2 font-body text-xs text-gold-400">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-gold-500 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-950 transition-all duration-200 hover:bg-gold-400 active:scale-[0.98]"
              >
                Faire un don
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
