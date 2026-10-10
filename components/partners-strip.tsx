import type { SaleResponse } from "@/lib/types";

export function PartnersStrip({ partners }: { partners: SaleResponse["partners"] }) {
  return (
    <section id="partners" aria-labelledby="partners-heading" className="border-y border-orange/25 bg-black/35">
      <h2 id="partners-heading" className="sr-only">
        Partners
      </h2>
      <ul className="mx-auto flex max-w-[1180px] divide-x divide-orange/20 overflow-x-auto">
        {partners.map((partner) => (
          <li key={partner.name} className="flex min-w-[150px] flex-1 items-center justify-center px-5 py-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.src}
              alt={partner.name}
              className="h-7 w-auto max-w-[150px] object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
