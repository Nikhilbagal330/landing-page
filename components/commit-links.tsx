"use client";

import { toast } from "@/components/toaster";
import type { SaleResponse } from "@/lib/types";

export function CommitLinks({ commit }: { commit: SaleResponse["commit"] }) {
  return (
    <section
      id="commit"
      aria-labelledby="commit-heading"
      className="p-[22px] shadow-[0_0_122px_-50px_rgba(255,69,9,0.11)]"
      style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #350F0F" }}
    >
      <h2 id="commit-heading" className="px-3 text-lg font-medium text-ink">
        {commit.heading}
      </h2>
      <ul className="mt-8">
        {commit.links.map((link) => (
          <li
            key={link.id}
            id={`commit-${link.id}`}
            className="flex min-h-[52px] items-center justify-between gap-4 px-3"
          >
            <span className="text-sm text-[#F2F2F2]">{link.label}</span>
            <a
              href={link.href}
              className="text-base text-white/50 underline underline-offset-4 hover:text-white"
              onClick={(event) => {
                event.preventDefault();
                toast(link.label, {
                  description: "Placeholder document. Nothing is submitted from this demo.",
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
