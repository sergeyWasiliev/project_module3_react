interface Props {
  className?: string
}

export default function CalendarIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="2.5"
        y="4.5"
        width="15"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 8.5h15M6.5 2.5v3M13.5 2.5v3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}