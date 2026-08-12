export function CheckMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.5 14.3L12 17.8L19.5 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <path
        d="M10.5 10.5L17.5 17.5M17.5 10.5L10.5 17.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
