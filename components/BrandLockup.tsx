import Image from 'next/image'

type BrandLockupProps = {
  context?: 'nav' | 'footer'
}

const globalLetters = ['G', 'L', 'O', 'B', 'A', 'L']

function BrandA() {
  return (
    <svg
      viewBox="0 0 68 64"
      className="h-[1.12em] w-[1.16em] overflow-visible drop-shadow-[0_0_10px_rgba(201,168,76,0.24)]"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 51 L30 4 H38 L17 51 H6 Z"
        fill="currentColor"
      />
      <path
        d="M38 4 L62 51 H51 L30 4 H38 Z"
        fill="currentColor"
      />
      <path
        d="M2 60 C18 49 43 48 66 58 L64 63 C43 57 20 56 5 64 L2 60 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function BrandLockup({ context = 'nav' }: BrandLockupProps) {
  const isFooter = context === 'footer'

  return (
    <div
      className={`group/brand flex items-center ${
        isFooter ? 'gap-4' : 'gap-3'
      }`}
      aria-label="Global Mercury Recovery and Water Security"
    >
      <div
        className={`relative shrink-0 overflow-visible ${
          isFooter ? 'h-14 w-14' : 'h-11 w-11'
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-[-5px] rounded-full bg-teal/10 blur-md opacity-0 transition-opacity duration-300 group-hover/brand:opacity-100" />
        <Image
          src="/brand/icon-white.png"
          alt=""
          width={112}
          height={120}
          className="relative h-full w-full object-contain opacity-95 drop-shadow-[0_0_18px_rgba(0,212,170,0.16)] transition-opacity duration-300 group-hover/brand:opacity-100"
          priority={!isFooter}
        />
      </div>

      <div className="min-w-0">
        <div
          className={`flex items-center font-sans font-semibold leading-none text-white ${
            isFooter ? 'gap-1 text-2xl' : 'gap-[0.2rem] text-2xl'
          }`}
          aria-hidden="true"
        >
          {globalLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={
                letter === 'A'
                  ? 'relative inline-flex h-[0.92em] w-[0.84em] items-center justify-center text-gold'
                  : 'tracking-[0.09em]'
              }
            >
              {letter === 'A' ? <BrandA /> : letter}
            </span>
          ))}
        </div>
        <div
          className={`mt-1 font-sans font-semibold uppercase leading-tight tracking-[0.18em] text-gray-300 ${
            isFooter ? 'text-[0.62rem]' : 'hidden text-[0.58rem] sm:block'
          }`}
        >
          Mercury Recovery
          <span className="mx-1.5 text-teal">|</span>
          Water Security
        </div>
      </div>
    </div>
  )
}
