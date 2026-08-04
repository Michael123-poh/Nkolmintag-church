interface IconProps {
  size?: number;
  className?: string;
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5h2V5.4c-.35-.05-1.54-.15-2.93-.15-2.9 0-4.89 1.78-4.89 5.04v2.71H6.3V16.5h3.88V22h3.02v-5.5h3.72l.59-3.5h-4.31V10.7c0-1.01.27-1.7 1.8-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.8 8.4c.2-.45.4-.46.6-.47h.5c.16 0 .38-.02.58.45.2.48.7 1.68.76 1.8.06.13.1.28.02.44-.08.16-.13.27-.26.4-.13.14-.27.31-.39.42-.13.13-.26.27-.11.53.15.27.66 1.1 1.42 1.78.98.87 1.8 1.14 2.07 1.27.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.6.75 1.87.89.27.13.45.2.51.32.07.12.07.68-.16 1.34-.23.66-1.33 1.26-1.85 1.34-.5.08-1.14.11-1.84-.12-.42-.14-.96-.32-1.65-.62-2.9-1.25-4.8-4.16-4.94-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.42Z"
        fill="currentColor"
      />
    </svg>
  );
}
