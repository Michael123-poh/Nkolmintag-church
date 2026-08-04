interface MountainMarkProps {
  className?: string;
  color?: string;
}

export default function MountainMark({ className, color = "currentColor" }: MountainMarkProps) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      role="img"
      aria-label="Emblème Nkolmintage : montagne surmontée d'une colombe"
    >
      <path
        d="M32 4 L11 30 L18 30 L8 44 L56 44 L46 30 L53 30 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 4 L24 18 L32 15 L40 18 Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 0c1.2 2.6 3 4 5.6 4.4-2.6.6-4.2 2.2-5.6 5-1.4-2.8-3-4.4-5.6-5 2.6-.4 4.4-1.8 5.6-4.4Z"
        fill={color}
      />
    </svg>
  );
}
