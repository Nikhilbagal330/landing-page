import type { Countdown } from "@/hooks/use-countdown";

const UNITS = [
  { key: "days", caption: "Days" },
  { key: "hours", caption: "Hrs" },
  { key: "minutes", caption: "Min" },
  { key: "seconds", caption: "Sec" },
] as const;

export function CountdownUnits({ countdown }: { countdown: Countdown }) {
  return (
    <div>
      <ol className="flex items-center gap-1" aria-label={countdown.label}>
        {UNITS.map((unit, index) => (
          <li key={unit.key} className="flex items-center gap-1">
            <div className="flex min-w-11 flex-col items-center bg-[rgba(53,15,15,0.5)] px-3 py-2">
              <span className="text-lg leading-5 font-medium tracking-[0.04em] text-white tabular-nums">
                {countdown[unit.key]}
              </span>
              <span className="text-[9px] tracking-[0.06em] text-white/80 uppercase">
                {unit.caption}
              </span>
            </div>
            {index < UNITS.length - 1 ? (
              <span className="font-mono text-sm font-bold text-white" aria-hidden>
                :
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">
        {countdown.ready
          ? `${countdown.label}: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes`
          : "Countdown loading"}
      </p>
    </div>
  );
}
