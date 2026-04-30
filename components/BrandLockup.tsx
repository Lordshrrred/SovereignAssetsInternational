import Image from 'next/image'

type BrandLockupProps = {
  context?: 'nav' | 'footer'
}

const globalLetters = ['G', 'L', 'O', 'B', 'A', 'L']

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
                  ? 'relative inline-flex h-[0.88em] w-[0.72em] items-end justify-center text-gold'
                  : 'tracking-[0.09em]'
              }
            >
              {letter === 'A' ? (
                <>
                  <span className="absolute inset-x-0 bottom-0 mx-auto h-full w-full [clip-path:polygon(50%_0,100%_100%,78%_100%,62%_64%,38%_64%,22%_100%,0_100%)] bg-gold-gradient shadow-[0_0_14px_rgba(201,168,76,0.28)]" />
                  <span className="absolute bottom-[0.23em] left-[27%] right-[27%] h-[0.1em] bg-navy" />
                </>
              ) : (
                letter
              )}
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
