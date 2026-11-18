interface Props {
  className?: string
}

export default function PersonIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="22"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="currentColor"
      />
      <path d="M4 20a8 8 0 0 1 16 0H4Z" fill="currentColor" />
    </svg>
  )
}