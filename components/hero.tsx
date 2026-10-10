import { Badge } from "@/components/ui/badge";
import { CountdownUnits } from "@/components/countdown-units";
import { ProgressBar } from "@/components/progress-bar";
import type { Countdown } from "@/hooks/use-countdown";
import type { SaleResponse } from "@/lib/types";

type HeroProps = {
  project: SaleResponse["project"];
  hero: SaleResponse["hero"];
  countdown: Countdown;
};

export function Hero({ project, hero, countdown }: HeroProps) {
  return (
    <article className="rounded-md border border-orange/30 bg-black/45 p-5 shadow-[0_0_80px_rgba(255,76,0,0.06)] sm:p-7">
      <Badge>{project.badge}</Badge>
      <h1 className="mt-5 max-w-md text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {project.headline}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-[15px]">
        {project.description}
      </p>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-muted">{hero.raisedLabel}</p>
          <p className="mt-1 text-3xl font-medium tracking-tight">{hero.raisedDisplay}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted">{hero.priceLabel}</p>
          <p className="mt-1 text-3xl font-medium tracking-tight text-orange">
            {hero.priceDisplay}
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-between text-[11px] text-muted">
        <span>{hero.progressStart}</span>
        <span>{hero.progressEnd}</span>
      </div>
      <ProgressBar className="mt-1.5" value={hero.progress} label="Amount raised" />

      <div className="mt-4 rounded-sm border border-orange/25 px-3 py-3">
        <div className="mb-2 flex justify-between text-[11px] text-muted">
          <span>{hero.allocation.start}</span>
          <span>{hero.allocation.current}</span>
          <span>{hero.allocation.end}</span>
        </div>
        <ProgressBar value={hero.allocation.progress} label="Tokens allocated" />
      </div>

      <div className="mt-5">
        <CountdownUnits countdown={countdown} />
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-sm border border-orange/25 px-3 py-3">
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-orange" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <p className="text-sm text-zinc-300">{hero.footnote}</p>
      </div>
    </article>
  );
}
