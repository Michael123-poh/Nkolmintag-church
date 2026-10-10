import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "./SocialIcons";
import { contact, nav, socials } from "../data/content";

const iconByName: Record<string, typeof FacebookIcon> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsAppIcon,
};

const socialIcons = socials.map((s) => ({ ...s, Icon: iconByName[s.icon] ?? FacebookIcon }));

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex min-h-dvh flex-col justify-between bg-ink-950 pt-28 text-cream-100/80"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-6">
        <div className="flex items-center gap-3 text-cream-50">
          <Logo iconClassName="h-10 w-10" textClassName="font-sans text-xl font-semibold tracking-wide" />
        </div>
        <h2 className="mt-6 max-w-[16ch] font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
          Restons en contact.
        </h2>

        <div className="mt-14 grid gap-8 border-t border-cream-50/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Adresse
            </h4>
            <p className="mt-3 font-body text-sm leading-tight">{contact.address}</p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Navigation
            </h4>
            <ul className="mt-3 space-y-1.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href.startsWith("#") ? `/${n.href}` : n.href}
                    className="font-body text-sm transition-colors hover:text-cream-50"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Contact
            </h4>
            <ul className="mt-3 space-y-1.5 font-body text-sm">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-cream-50">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-cream-50">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Suivez-nous
            </h4>
            <div className="mt-3 flex gap-3">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 px-6 py-6 font-body text-xs text-cream-100/50 sm:flex-row">
          <p>© 2026 Église Nkolmintag. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream-50">
              Politique de confidentialité
            </a>
            <a href="#" className="transition-colors hover:text-cream-50">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
