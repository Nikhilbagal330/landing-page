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
      <p className="text-xs text-muted">{countdown.label}</p>
      <ol className="mt-2 flex gap-2" aria-label={countdown.label}>
        {UNITS.map((unit) => (
          <li
            key={unit.key}
            className="min-w-14 flex-1 rounded-sm border border-orange/30 bg-black/50 px-1 py-1.5 text-center"
          >
            <span className="block font-mono text-sm tabular-nums text-white">
              {countdown[unit.key]}
            </span>
            <span className="block text-[10px] tracking-[0.14em] text-orange uppercase">
              {unit.caption}
            </span>
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
