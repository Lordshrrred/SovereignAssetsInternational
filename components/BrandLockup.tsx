type BrandLockupProps = {
  context?: 'nav' | 'footer'
}

export default function BrandLockup({ context = 'nav' }: BrandLockupProps) {
  const isFooter = context === 'footer'

  return (
    <div
      className={`group/brand flex min-w-0 items-center ${
        isFooter ? 'w-full flex-col justify-center gap-2 text-center sm:w-auto sm:items-start sm:text-left' : ''
      }`}
      aria-label="Global Mercury Recovery and Water Security"
    >
      <div className={`min-w-0 shrink ${isFooter ? 'flex max-w-full flex-col items-center sm:items-start' : ''}`}>
        <div
          className={`font-sans font-semibold uppercase leading-none text-white transition-colors duration-300 group-hover/brand:text-gold ${
            isFooter ? 'text-lg tracking-[0.18em] sm:text-xl' : 'text-[0.95rem] tracking-[0.16em] sm:text-lg sm:tracking-[0.2em]'
          }`}
        >
          Global Mercury Recovery
        </div>
        <div
          className={`mt-1.5 font-sans font-semibold uppercase leading-tight text-teal ${
            isFooter ? 'text-[0.65rem] tracking-[0.2em] sm:text-xs' : 'text-[0.56rem] tracking-[0.19em] sm:text-[0.65rem] sm:tracking-[0.24em]'
          }`}
        >
          Water Security
        </div>
      </div>
    </div>
  )
}
