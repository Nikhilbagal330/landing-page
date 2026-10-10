import { CornerMarks } from "@/components/corner-marks";
import { Button } from "@/components/ui/button";
import type { SaleResponse } from "@/lib/types";

type SaleCardProps = {
  sale: SaleResponse["sale"];
  onConnectWallet: () => void;
  onConnectSonar: () => void;
};

function BracketButton({
  children,
  variant = "default",
  onClick,
}: {
  children: string;
  variant?: "default" | "outline";
  onClick: () => void;
}) {
  const isOutline = variant === "outline";

  return (
    <div
      className={`relative flex w-full items-center ${isOutline ? "h-[72px]" : "h-[78px]"
        }`}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full"
        viewBox={`0 0 634 ${isOutline ? 72 : 78}`}
        preserveAspectRatio="none"
        fill="none"
      >
        {isOutline ? (
          <>
            {/* Top-left */}
            <path d="M8 0.5H1V8.5 M1 63.5V71.5H8" stroke="#FF4509" />
            {/* Top-right */}
            <path d="M626 0.5H633V8.5 M633 63.5V71.5H626" stroke="#FF4509" />
          </>
        ) : (
          <>
            {/* Top-left */}
            <path d="M7.6 0H6.5V9.6H0 M0 68.4H6.5V78H7.6" stroke="#FF4509" />
            {/* Top-right */}
            <path d="M626.4 0H627.5V9.6H634 M634 68.4H627.5V78H626.4" stroke="#FF4509" />
          </>
        )}
      </svg>

      <Button
        variant={isOutline ? "ghost" : "default"}
        onClick={onClick}
        className={`mx-[7px] w-[calc(100%-14px)] rounded-none px-6 text-[17.38px] font-medium tracking-[-0.218px] ${isOutline
            ? "h-[59px] border border-orange bg-transparent text-white hover:bg-white/5"
            : "h-[59px] bg-orange text-white hover:bg-[#ff5409]"
          }`}
      >
        {children}
      </Button>
    </div>
  );
}

export function SaleCard({
  sale,
  onConnectWallet,
  onConnectSonar,
}: SaleCardProps) {
  return (
    <div className="relative isolate">
      {/* Red blurred ellipse behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-12 -z-10
          h-[339px] w-[215px] rotate-[19.22deg]
          bg-[#FF4509] opacity-70 blur-[250px]"
      />

      <article
        className="relative flex flex-col gap-4 p-[22px]
          shadow-[0_0_122px_-50px_rgba(255,69,9,0.11)]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #350F0F",
        }}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-medium tracking-[0.2px] text-white uppercase">
            {sale.title}
          </h2>
          <p className="text-lg leading-[21px] tracking-[0.2px] text-white/80">
            {sale.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <BracketButton onClick={onConnectWallet}>
            Connect Wallet
          </BracketButton>

          <BracketButton variant="outline" onClick={onConnectSonar}>
            Connect Sonar
          </BracketButton>

          <p className="text-center text-sm leading-[17px] tracking-[0.2px] text-white/80">
            Connect your wallet and Sonar account to view your allocation.
          </p>
        </div>
      </article>
    </div>
  );
}
