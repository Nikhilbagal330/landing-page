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
    <div className="relative flex min-h-[43px] items-center justify-center bg-orange px-10 text-[14px] leading-[21px] font-normal text-white">
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

      <p className="flex items-center gap-1.5 font-normal">
        <span className="font-normal text-white/80">
          {message}
        </span>

        <a
          href={href}
          className="inline-flex shrink-0 items-center gap-1.5 font-normal text-white"
        >
          Read more
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </p>
    </div>
  );
}