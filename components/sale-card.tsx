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
  return (
    <div className={`relative flex items-center px-2 ${variant === "outline" ? "h-[72px]" : "h-[78px]"}`}>
      <CornerMarks />
      <Button
        variant={variant === "outline" ? "ghost" : "default"}
        className={
          variant === "outline"
            ? "h-[59px] w-full border border-orange bg-transparent text-[17px] hover:bg-white/5"
            : "h-[59px] w-full bg-orange text-[17px] hover:bg-[#ff5409]"
        }
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

export function SaleCard({ sale, onConnectWallet, onConnectSonar }: SaleCardProps) {
  return (
    <article
      className="flex flex-col gap-4 p-[22px] shadow-[0_0_122px_-50px_rgba(255,69,9,0.11)]"
      style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #350F0F" }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-medium tracking-[0.2px] text-white uppercase">
          {sale.title}
        </h2>
        <p className="text-lg leading-[21px] tracking-[0.2px] text-white/80">{sale.subtitle}</p>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <BracketButton onClick={onConnectWallet}>Connect Wallet</BracketButton>
        <BracketButton variant="outline" onClick={onConnectSonar}>
          Connect Sonar
        </BracketButton>
        <p className="text-center text-sm leading-[17px] tracking-[0.2px] text-white/80">
          Connect your wallet and Sonar account to view your allocation.
        </p>
      </div>
    </article>
  );
}
