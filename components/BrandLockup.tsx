import Image from 'next/image'

type BrandLockupProps = {
  context?: 'nav' | 'footer'
}

export default function BrandLockup({ context = 'nav' }: BrandLockupProps) {
  const isFooter = context === 'footer'

  return (
    <div
      className={`group/brand flex min-w-0 items-center ${
        isFooter ? 'gap-4' : 'gap-3 sm:gap-3.5'
      }`}
      aria-label="Global Mercury Recovery and Water Security"
    >
      <div
        className={`relative shrink-0 overflow-visible ${
          isFooter ? 'h-14 w-14' : 'h-10 w-10 sm:h-11 sm:w-11'
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

      <div className="min-w-0 shrink">
        {!isFooter && (
          <div className="block w-[9.5rem] sm:hidden" aria-hidden="true">
            <Image
              src="/brand/global-wordmark-white.png"
              alt=""
              width={3200}
              height={455}
              className="h-5 w-auto max-w-full object-contain object-left opacity-100 drop-shadow-[0_0_14px_rgba(255,255,255,0.14)] [filter:brightness(1.08)_contrast(1.08)]"
              priority
              aria-hidden="true"
            />
            <div className="mt-1.5 font-sans text-[0.58rem] font-semibold uppercase leading-none tracking-[0.17em] text-white/80">
              Mercury Recovery
            </div>
            <div className="mt-1 font-sans text-[0.58rem] font-semibold uppercase leading-none tracking-[0.18em] text-teal">
              Water Security
            </div>
          </div>
        )}
        <Image
          src="/brand/global-wordmark-white.png"
          alt=""
          width={3200}
          height={455}
          className={`object-contain object-left opacity-100 drop-shadow-[0_0_14px_rgba(255,255,255,0.14)] [filter:brightness(1.08)_contrast(1.08)] ${
            isFooter ? 'h-10 w-auto max-w-full' : 'hidden h-7 w-auto max-w-[11rem] sm:block sm:h-8 sm:max-w-none'
          }`}
          priority={!isFooter}
          aria-hidden="true"
        />
        <div
          className={`mt-1.5 font-sans font-semibold uppercase leading-tight tracking-[0.2em] text-white/75 ${
            isFooter ? 'text-[0.68rem]' : 'hidden text-[0.62rem] sm:block'
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
