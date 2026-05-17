export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect
        width="32"
        height="32"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-line)"
      />
      <path
        d="M8 16c0-3.314 2.686-6 6-6h2.5"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24 16c0 3.314-2.686 6-6 6h-2.5"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2" fill="var(--color-accent)" />
    </svg>
  );
}
