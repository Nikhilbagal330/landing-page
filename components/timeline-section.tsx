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
          className="absolute top-2 right-0 left-0 hidden h-0.5 bg-[rgba(255,233,220,0.12)] sm:block"
          aria-hidden
        />
        <ol className="grid gap-6 sm:grid-cols-4">
          {timeline.phases.map((phase) => (
            <li key={phase.id} className="relative">
              <span
                className={cn(
                  "relative z-10 block size-[18px] rounded-full border-2 bg-[#0B0807]",
                  phase.status === "active"
                    ? "border-orange"
                    : "border-[rgba(255,233,220,0.24)]",
                )}
              />
              <p
                className={cn(
                  "mt-4 text-[13px] leading-5",
                  phase.status === "active" ? "text-orange" : "text-[#BDB1A9]",
                )}
              >
                {phase.kicker}
              </p>
              <p className="mt-0.5 text-lg font-medium text-ink">{phase.title}</p>
              <p className="text-sm text-[#BDB1A9]">{phase.detail}</p>
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
              <tr key={row.id} className="border-b border-[#292524]">
                <th scope="row" className="py-3 pr-4 text-left text-base font-normal text-[#F2F2F2]">
                  <span className="inline-flex items-center gap-3">
                    <Icon className="size-4 text-[#F2F2F2]" aria-hidden />
                    {row.label}
                  </span>
                </th>
                <td className="py-3 text-right text-base tracking-[0.01em] text-[#F2F2F2]">
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
