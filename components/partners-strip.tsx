import type { SaleResponse } from "@/lib/types";

function PlusMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`block size-[14px] ${className ?? ""}`}>
      <span className="absolute top-0 left-1/2 h-full w-[3.5px] -translate-x-1/2 bg-[#833C3C]" />
      <span className="absolute top-1/2 left-0 h-[3.5px] w-full -translate-y-1/2 bg-[#833C3C]" />
    </span>
  );
}

function BottomTee({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`absolute h-[8.75px] w-[14px] -translate-x-1/2 ${className ?? ""}`}>
      <span className="absolute top-0 left-1/2 h-[5.25px] w-[3.5px] -translate-x-1/2 bg-[#833C3C]" />
      <span className="absolute bottom-0 left-0 h-[3.5px] w-full bg-[#833C3C]" />
    </span>
  );
}

function SplitRule({ left }: { left: string }) {
  return (
    <div aria-hidden className="absolute inset-y-0 w-0" style={{ left }}>
      <span className="absolute top-[14px] bottom-[11px] left-0 w-px -translate-x-1/2 bg-[#531A1A]" />
      <PlusMark className="absolute top-[6.5px] left-0 -translate-x-1/2 -translate-y-1/2" />
      <BottomTee className="bottom-[2px] left-0" />
    </div>
  );
}

function LogoRow({ partners }: { partners: SaleResponse["partners"] }) {
  return (
    <ul className="flex h-[56px] items-center gap-10">
      {partners.map((partner) => (
        <li
          key={partner.name}
          className="flex h-[56px] w-[143px] shrink-0 items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={partner.src}
            alt={partner.name}
            className="max-h-[56px] max-w-[143px] object-contain"
          />
        </li>
      ))}
    </ul>
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
      className="relative h-[96px] w-full"
    >
      <div className="absolute inset-x-0 top-[6.5px] h-[87.5px] border-y border-[#531A1A] bg-[rgba(34,3,3,0.33)] backdrop-blur-[12px]" />

      <div className="relative hidden h-full w-full lg:block">
        <SplitRule left="9.39%" />
        <p className="absolute top-[25px] left-[11.39%] w-[165px] text-[15.71px] leading-[19px] font-normal whitespace-pre-line text-white uppercase">
          {label}
        </p>
        <SplitRule left="22.61%" />

        <div className="absolute top-1/2 left-[22.61%] h-16 w-[68.12%] -translate-y-1/2 overflow-hidden">
          <LogoRow partners={partners} />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[101px] bg-[linear-gradient(90deg,#0C0202_3.38%,rgba(12,1,1,0)_81.2%)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[101px] -scale-x-100 bg-[linear-gradient(270.85deg,rgba(12,2,2,0)_0.81%,#0D0202_95.03%)]"
          />
        </div>

        <SplitRule left="90.73%" />
      </div>

      <div className="relative flex h-full items-center overflow-hidden px-4 lg:hidden">
        <LogoRow partners={partners} />
      </div>
    </section>
  );
}
