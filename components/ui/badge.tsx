import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.16em]",
  {
    variants: {
      tone: {
        orange: "border-orange/70 text-orange",
        muted: "border-white/15 text-muted",
      },
    },
    defaultVariants: {
      tone: "orange",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, tone, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
