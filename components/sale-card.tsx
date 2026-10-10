import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/progress-bar";
import type { Countdown } from "@/hooks/use-countdown";
import type { SaleResponse } from "@/lib/types";

type SaleCardProps = {
  sale: SaleResponse["sale"];
  countdown: Countdown;
  onConnectWallet: () => void;
  onConnectSonar: () => void;
};

export function SaleCard({
  sale,
  countdown,
  onConnectWallet,
  onConnectSonar,
}: SaleCardProps) {
  return (
    <article className="rounded-md border border-orange/40 bg-black/55 p-5 shadow-[0_0_80px_rgba(255,76,0,0.08)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xs font-medium tracking-[0.2em] text-white uppercase">
            {sale.title}
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{sale.subtitle}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-[11px] text-muted">
          <span>{sale.progressLabel}</span>
          <span>
            {sale.raisedDisplay}
            <span className="text-zinc-600"> / {sale.hardCapDisplay}</span>
          </span>
        </div>
        <ProgressBar value={sale.progress} label={sale.progressLabel} />
      </div>

      <p className="mt-4 font-mono text-sm text-orange" aria-live="off">
        <span className="text-muted">{countdown.label} </span>
        <span className="tabular-nums">
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </span>
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {sale.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-sm font-medium text-orange">{column.heading}</p>
            <dl className="mt-3 space-y-2.5">
              {column.rows.map((row) => (
                <div key={row.label}>
                  <dt className="text-[11px] text-muted">{row.label}</dt>
                  <dd className="text-sm text-zinc-100">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button onClick={onConnectWallet}>Connect Wallet</Button>
        <Button onClick={onConnectSonar}>Connect Sonar</Button>
      </div>
    </article>
  );
}
