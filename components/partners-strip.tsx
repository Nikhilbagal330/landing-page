import type { SaleResponse } from "@/lib/types";

function PlusMark() {
  return (
    <span aria-hidden className="relative block size-3.5">
      <span className="absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 bg-[#833C3C]" />
      <span className="absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 bg-[#833C3C]" />
    </span>
  );
}

export function PartnersStrip({
  partners,
  label,
}: {
  partners: SaleResponse["partners"];
  label: string;
}) {
  const [first, second] = label.split(" ");

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative border-y border-[#531A1A] bg-[rgba(34,3,3,0.33)] backdrop-blur-[12px]"
    >
      <h2 id="partners-heading" className="sr-only">
        Partners
      </h2>
      <div className="relative mx-auto flex h-[88px] max-w-[1694px] items-center">
        <p className="hidden w-[180px] shrink-0 px-8 text-[15.7px] leading-[19px] text-white uppercase sm:block">
          {first}
          {second ? (
            <>
              <br />
              {second}
            </>
          ) : null}
        </p>
        <span aria-hidden className="hidden h-14 w-px bg-[#531A1A] sm:block" />
        <ul className="flex min-w-0 flex-1 items-center justify-between gap-4 overflow-hidden px-4 sm:gap-8 sm:px-8">
          {partners.map((partner) => (
            <li key={partner.name} className="flex h-14 min-w-0 flex-1 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={partner.name}
                className="partner-logo h-7 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
      <span className="absolute top-0 left-[168px] -translate-y-1/2">
        <PlusMark />
      </span>
      <span className="absolute bottom-0 left-[168px] translate-y-1/2">
        <PlusMark />
      </span>
      <span className="absolute top-0 right-8 -translate-y-1/2">
        <PlusMark />
      </span>
      <span className="absolute right-8 bottom-0 translate-y-1/2">
        <PlusMark />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[180px] hidden w-16 bg-gradient-to-r from-[#0C0202] to-transparent sm:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0D0202] to-transparent"
      />
    </section>
  );
}
