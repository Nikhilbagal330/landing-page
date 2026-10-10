import { CountdownUnits } from "@/components/countdown-units";
import { ProgressBar } from "@/components/progress-bar";
import type { Countdown } from "@/hooks/use-countdown";
import type { SaleResponse } from "@/lib/types";

type HeroProps = {
  project: SaleResponse["project"];
  hero: SaleResponse["hero"];
  countdown: Countdown;
};

function MiniMeter({
  label,
  value,
  start,
  end,
  progress,
}: {
  label: string;
  value: string;
  start: string;
  end: string;
  progress: number;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 bg-black/40 p-2.5">
      <div className="flex items-center justify-between gap-3 border-b border-[#541400] pb-2">
        <span className="text-xs font-medium text-white">{label}</span>
        <span className="text-sm text-orange">{value}</span>
      </div>
      <div className="flex flex-col gap-2">
        <ProgressBar value={progress} label={label} />
        <div className="flex justify-between text-sm text-white/80">
          <span>{start}</span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
}

export function Hero({ project, hero, countdown }: HeroProps) {
  return (
    <article className="flex flex-col gap-10 pt-2">
      <div className="flex flex-col gap-[27px]">
        <div className="relative flex h-[29px] w-[208px] items-center justify-center">
          <img
            src="/images/border.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          <span className="relative z-10 text-base tracking-[0.12em] text-orange">
            {project.badge}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px] leading-[1.05] font-medium tracking-[-0.03em] text-white sm:text-[64px] sm:leading-[67px]">
            {project.headline}
          </h1>
          <p className="text-xl leading-[1.33] text-white/60">            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-base tracking-[0.01em] text-white/80">{hero.raisedLabel}</p>
              <p className="text-[32px] leading-[38px] font-medium text-ink">
                {hero.raisedDisplay}
              </p>
            </div>
            <div className="text-right">
              <p className="text-base tracking-[0.01em] text-white/80">{hero.priceLabel}</p>
              <p className="text-[32px] leading-[38px] font-medium text-orange">
                {hero.priceDisplay}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <ProgressBar value={hero.progress} label="Amount raised" />
            <div className="flex justify-between text-sm text-white/80">
              <span>{hero.progressStart}</span>
              <span>{hero.progressEnd}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <MiniMeter
              label={hero.raisedLabel}
              value={hero.raisedDisplay}
              start={hero.progressStart}
              end={hero.progressEnd}
              progress={hero.progress}
            />
            <MiniMeter
              label="Allocated"
              value={hero.allocation.current}
              start={hero.allocation.start}
              end={hero.allocation.end}
              progress={hero.allocation.progress}
            />
          </div>

          <div className="flex flex-col gap-1.5 border border-[#350F0F] bg-black px-3.5 py-4">
            <p className="text-base tracking-[0.01em] text-white/80">{hero.footnote}</p>
            <p className="text-[32px] leading-[38px] font-medium">{hero.allocation.current}</p>
          </div>

          <div className="flex flex-col gap-4 border border-[#350F0F] bg-black px-3.5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-1.5">
              <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-[#F2F2F2]" aria-hidden>
                <rect x="3.5" y="5" width="17" height="15.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3.5 10h17M8 3.5v4M16 3.5v4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <div>
                <p className="text-lg leading-6 font-medium text-white">{countdown.label}</p>
                <p className="text-sm leading-5 text-white/80">{hero.footnote}</p>
              </div>
            </div>
            <CountdownUnits countdown={countdown} />
          </div>
        </div>
      </div>
    </article>
  );
}
