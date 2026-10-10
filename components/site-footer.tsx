"use client";

import { toast } from "@/components/toaster";
import { Button } from "@/components/ui/button";
import type { SaleResponse } from "@/lib/types";

function SocialIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-4",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
        </svg>
      );
    case "discord":
      return (
        <svg {...common}>
          <path d="M19.3 5.2A17 17 0 0 0 15.1 4l-.4.8a15.6 15.6 0 0 1 4 1.6 16 16 0 0 0-13.4 0A12 12 0 0 1 9.3 4.8L8.9 4a17 17 0 0 0-4.2 1.2C2.2 8.4 1.5 11.5 1.7 14.6a17.4 17.4 0 0 0 5.3 2.7l.7-1.1a11.3 11.3 0 0 1-1.7-.8l.4-.3c3.4 1.6 7.1 1.6 10.4 0l.4.3c-.5.3-1.1.6-1.7.8l.7 1.1a17.4 17.4 0 0 0 5.3-2.7c.5-3.6-.6-6.7-2.2-9.4zM8.8 13.3c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm6.4 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.7 3.3A1.8 1.8 0 1 1 4.7 7a1.8 1.8 0 0 1 0-3.7zM3.2 8.6h3V21h-3V8.6zM9.2 8.6h2.9v1.7h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V21h-3v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3V8.6z" />
        </svg>
      );
    case "medium":
      return (
        <svg {...common}>
          <path d="M4.2 7.2a.7.7 0 0 0-.2-.6L2.3 4.6V4.3h5.4l4.2 9.2 3.7-9.2H21v.3l-1.5 1.4a.4.4 0 0 0-.2.4v11.2a.4.4 0 0 0 .2.4l1.4 1.4v.3h-7.3v-.3l1.5-1.4c.1-.1.1-.2.1-.4V8.3l-4.1 10.4h-.6L6.1 8.3v7.1a1 1 0 0 0 .3.8l1.9 2.3v.3H2.2v-.3l1.9-2.3a1 1 0 0 0 .2-.8V7.2z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M17.6 3H20.4L13.8 10.4 21.6 21h-6.1l-4.8-6.3L5.2 21H2.4l7.1-8.1L2.2 3h6.2l4.3 5.7L17.6 3zm-1.1 16.2h1.7L7.5 4.7H5.7l10.8 14.5z" />
        </svg>
      );
  }
}

type FooterProps = {
  socials: SaleResponse["socials"];
  contract: SaleResponse["contract"];
  symbol: string;
  disclaimer: string;
};

export function SiteFooter({ socials, contract, symbol, disclaimer }: FooterProps) {
  return (
    <footer className="relative z-10 pb-16">
      <ul className="flex items-center justify-center gap-4 text-zinc-300">
        {socials.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="block rounded-sm p-2 hover:text-orange"
            >
              <SocialIcon id={social.id} />
            </a>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 flex w-full max-w-sm overflow-hidden rounded-sm">
        <p className="flex flex-1 items-center bg-[#2a140c] px-4 font-mono text-sm text-zinc-200">
          {contract.label}
        </p>
        <Button
          className="rounded-none px-6 tracking-[0.18em]"
          onClick={() => {
            void navigator.clipboard
              .writeText(contract.address)
              .then(() => {
                toast.success("Contract address copied", {
                  description: contract.address,
                });
              })
              .catch(() => {
                toast.error("Could not copy the contract address");
              });
          }}
        >
          {symbol}
        </Button>
      </div>

      <p className="mx-auto mt-8 max-w-3xl px-4 text-center text-xs leading-5 text-muted">
        {disclaimer}
      </p>
    </footer>
  );
}
