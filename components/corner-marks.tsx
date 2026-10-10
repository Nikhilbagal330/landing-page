import { cn } from "@/lib/utils";

export function CornerMarks({ className }: { className?: string }) {
  const arm = "absolute bg-orange";
  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn(arm, "top-0 left-0 h-1.5 w-px")} />
      <span className={cn(arm, "top-0 left-0 h-px w-1.5")} />
      <span className={cn(arm, "bottom-0 left-0 h-1.5 w-px")} />
      <span className={cn(arm, "bottom-0 left-0 h-px w-1.5")} />
      <span className={cn(arm, "top-0 right-0 h-1.5 w-px")} />
      <span className={cn(arm, "top-0 right-0 h-px w-1.5")} />
      <span className={cn(arm, "right-0 bottom-0 h-1.5 w-px")} />
      <span className={cn(arm, "right-0 bottom-0 h-px w-1.5")} />
    </span>
  );
}
