
"use client";

import { toast } from "@/components/toaster";
import type { SaleResponse } from "@/lib/types";

export function CommitLinks({ commit }: { commit: SaleResponse["commit"] }) {
  return (
    <section
      id="commit"
      aria-labelledby="commit-heading"
      className="box-border flex h-[225px] w-full flex-col items-start justify-between gap-2 border border-[#541400] p-[22px] shadow-[0_0_122.6px_-50px_rgba(255,69,9,0.11),0_0_45px_rgba(255,69,9,0.08)]" style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #350F0F",
      }}
    >
      <h2
        id="commit-heading"
        className="px-3 text-[18px] leading-[23px] font-medium text-[#F7F1EC]"
      >
        {commit.heading}
      </h2>

      <ul className="w-full pt-[10px]">
        {commit.links.map((link) => (
          <li
            key={link.id}
            id={`commit-${link.id}`}
            className="flex h-[52px] min-h-[52px] w-full items-center justify-between gap-4 rounded-md px-3"
          >
            <span className="text-[14px] leading-5 text-[#F2F2F2]">
              {link.label}
            </span>
            <a
              href={link.href}
              className="text-[16px] leading-5 tracking-[0.2px] text-white/50 underline underline-offset-4 hover:text-white"
              onClick={(event) => {
                event.preventDefault();
                toast(link.label, {
                  description:
                    "Placeholder document. Nothing is submitted from this demo.",
                });
              }}
            >
              {link.action}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
