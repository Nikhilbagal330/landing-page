"use client";

import { ArrowRight, X } from "lucide-react";
import { toast } from "@/components/toaster";

type TopBannerProps = {
  message: string;
  href: string;
  onDismiss: () => void;
};

export function TopBanner({ message, href, onDismiss }: TopBannerProps) {
  return (
    <div className="relative flex h-[43px] items-center justify-center bg-orange px-10 text-[14px] leading-[21px] text-white">
      <button
        type="button"
        className="absolute left-8 rounded-sm p-1 hover:bg-black/10"
        aria-label="Dismiss announcement"
        onClick={() => {
          onDismiss();
          toast("Announcement dismissed");
        }}
      >
        <X className="size-4" />
      </button>
      <p className="inline-flex items-center gap-1.5">
        <span className="text-white/80">{message.split(" ")[0]}</span>
        <a href={href} className="inline-flex items-center gap-1.5 hover:underline">
          {message.split(" ").slice(1).join(" ") || message}
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </p>
    </div>
  );
}
