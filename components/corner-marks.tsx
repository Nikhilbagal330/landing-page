import { cn } from "@/lib/utils";

export function CornerMarks({
  className,
  outset = false,
}: {
  className?: string;
  outset?: boolean;
}) {
  const arm = "absolute bg-orange";
  const corners = outset
    ? [
        "top-0 left-0 h-1.5 w-px -translate-y-full",
        "top-0 left-0 h-px w-1.5 -translate-x-full",
        "bottom-0 left-0 h-1.5 w-px translate-y-full",
        "bottom-0 left-0 h-px w-1.5 -translate-x-full",
        "top-0 right-0 h-1.5 w-px -translate-y-full",
        "top-0 right-0 h-px w-1.5 translate-x-full",
        "right-0 bottom-0 h-1.5 w-px translate-y-full",
        "right-0 bottom-0 h-px w-1.5 translate-x-full",
      ]
    : [
        "top-0 left-0 h-1.5 w-px",
        "top-0 left-0 h-px w-1.5",
        "bottom-0 left-0 h-1.5 w-px",
        "bottom-0 left-0 h-px w-1.5",
        "top-0 right-0 h-1.5 w-px",
        "top-0 right-0 h-px w-1.5",
        "right-0 bottom-0 h-1.5 w-px",
        "right-0 bottom-0 h-px w-1.5",
      ];

  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {corners.map((place) => (
        <span key={place} className={cn(arm, place)} />
      ))}
    </span>
  );
}
