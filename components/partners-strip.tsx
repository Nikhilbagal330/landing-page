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
  return (
    <section
      id="partners"
      aria-label="Partners and backers"
      className="relative w-full border-y border-[#531A1A] bg-[#0D0202]"
    >
<div className="relative mx-auto flex h-[96px] w-full max-w-[1248px] items-center px-4 sm:px-8 lg:px-0">  <p className="hidden w-[180px] shrink-0 px-6 text-[15px] leading-[19px] text-white uppercase sm:block">
        {label}
      </p>

        <span
          aria-hidden
          className="hidden h-[72px] w-px shrink-0 bg-[#531A1A] sm:block"
        />

        <ul className="flex min-w-0 flex-1 items-center justify-between gap-5 overflow-hidden px-4 sm:gap-8 sm:px-8">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex h-14 min-w-0 flex-1 items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={partner.name}
                className="partner-logo h-9 w-auto max-w-full object-contain sm:h-10"
              />
            </li>
          ))}
        </ul>
      </div>

      <span className="absolute top-0 left-[calc((100%-1248px)/2+180px)] hidden -translate-y-1/2 sm:block">
        <PlusMark />
      </span>
      <span className="absolute bottom-0 left-[calc((100%-1248px)/2+180px)] hidden translate-y-1/2 sm:block">
        <PlusMark />
      </span>
    </section>
  );
}