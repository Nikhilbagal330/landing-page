import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  label: string;
  className?: string;
};

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, Math.round(value * 100)));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-orange/20", className)}
    >
      <div
        className="h-full rounded-full bg-orange transition-[width] duration-700 ease-out motion-reduce:transition-none"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
