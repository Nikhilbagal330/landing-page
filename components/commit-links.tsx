"use client";

import { toast } from "@/components/toaster";
import type { SaleResponse } from "@/lib/types";

export function CommitLinks({ commit }: { commit: SaleResponse["commit"] }) {
  return (
    <section
      id="commit"
      aria-labelledby="commit-heading"
      className="rounded-md border border-orange/30 bg-black/40 p-5 sm:p-6"
    >
      <h2 id="commit-heading" className="text-lg font-medium tracking-tight">
        {commit.heading}
      </h2>
      <ul className="mt-4 divide-y divide-white/10">
        {commit.links.map((link) => (
          <li
            key={link.id}
            id={`commit-${link.id}`}
            className="flex items-center justify-between gap-4 py-3.5"
          >
            <span className="text-sm text-zinc-300">{link.label}</span>
            <a
              href={link.href}
              className="text-sm underline decoration-white/40 underline-offset-4 hover:text-orange hover:decoration-orange"
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
