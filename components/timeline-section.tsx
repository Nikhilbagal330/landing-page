import { Flag, Crosshair, FileText, LayoutGrid, Users } from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { DetailIcon, SaleResponse } from "@/lib/types";

const ICONS: Record<DetailIcon, ComponentType<{ className?: string }>> = {
  grid: LayoutGrid,
  users: Users,
  file: FileText,
  target: Crosshair,
  flag: Flag,
};

type TimelineSectionProps = {
  timeline: SaleResponse["timeline"];
  details: SaleResponse["details"];
};

export function TimelineSection({ timeline, details }: TimelineSectionProps) {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute top-[7px] right-0 left-0 hidden h-px bg-white/15 sm:block"
          aria-hidden
        />
        <ol className="grid gap-6 sm:grid-cols-4">
          {timeline.phases.map((phase) => (
            <li key={phase.id} className="relative">
              <span
                className={cn(
                  "relative z-10 block size-3.5 rounded-full border bg-background",
                  phase.status === "active"
                    ? "border-orange bg-orange ring-4 ring-orange/25"
                    : "border-white/30",
                )}
              />
              <p
                className={cn(
                  "mt-4 text-sm",
                  phase.status === "active" ? "text-orange" : "text-zinc-300",
                )}
              >
                {phase.kicker}
              </p>
              <p className="mt-1 font-medium">{phase.title}</p>
              <p className="text-sm text-muted">{phase.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <table className="mt-8 w-full text-sm">
        <caption className="sr-only">Token sale details</caption>
        <tbody>
          {details.map((row) => {
            const Icon = ICONS[row.icon];
            return (
              <tr key={row.id} className="border-b border-white/10">
                <th scope="row" className="py-3.5 pr-4 text-left font-normal">
                  <span className="inline-flex items-center gap-3">
                    <Icon className="size-4 text-zinc-400" aria-hidden />
                    {row.label}
                  </span>
                </th>
                <td className="py-3.5 text-right text-zinc-300">
                  <span className="block">{row.value}</span>
                  {row.hint ? (
                    <span className="block text-xs text-muted">{row.hint}</span>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
