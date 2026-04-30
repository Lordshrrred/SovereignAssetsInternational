import Image from 'next/image'

type BrandLockupProps = {
  context?: 'nav' | 'footer'
}

const globalLetters = ['G', 'L', 'O', 'B', 'A', 'L']

function BrandA() {
  return (
    <img
      src="/brand/clean-stylized-a-white.svg"
      alt=""
      className="h-[1.18em] w-[1.18em] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
      aria-hidden="true"
    />
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
                  ? 'relative inline-flex h-[0.92em] w-[0.9em] items-center justify-center'
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
