import { cn } from "@/lib/utils";
import type { SaleResponse } from "@/lib/types";

type TimelineSectionProps = {
  timeline: SaleResponse["timeline"];
  details: SaleResponse["details"];
};

export function TimelineSection({ timeline, details }: TimelineSectionProps) {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute top-2 left-[9px] right-[calc(25%-9px)] hidden h-0.5 bg-[rgba(255,233,220,0.12)] sm:block"
          aria-hidden
        />
        <ol className="grid grid-cols-4 gap-0">      {timeline.phases.map((phase) => (
          <li key={phase.id} className="relative min-w-0">              <span
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
              {phase.kicker ?? "\u00A0"}
            </p>

            <p className="mt-[1px] whitespace-nowrap text-lg leading-[23px] font-medium text-ink">
              {phase.title}
            </p>

            <p className="text-sm leading-[22px] text-[#BDB1A9]">
              {phase.detail}
            </p>
          </li>
        ))}
        </ol>
      </div>

      <table className="mt-8 w-full text-sm">
        <caption className="sr-only">Token sale dets</caption>
        <tbody>
          {details.map((row) => {
            return (
              <tr key={row.id} className="border-b border-[#292524]">
                <th scope="row" className="py-3 pr-4 text-left text-base font-normal text-[#F2F2F2]">
                  <span className="inline-flex items-center gap-3">
                    <img
                      src={row.icon}
                      alt=""
                      aria-hidden="true"
                      className="size-4 shrink-0 object-contain"
                    />
                    <span>
                      {row.label}
                      {row.id === "target" && (
                        <span className="mt-1 block text-sm text-[#BDB1A9]">
                          Hard cap
                        </span>
                      )}
                    </span>
                  </span>
                </th>
                <td className="py-3 text-right text-base tracking-[0.01em] text-[#F2F2F2]">
                  <div>{row.value}</div>
                  {row.hint && (
                    <div className="mt-1 text-sm text-[#BDB1A9]">
                      {row.hint}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
