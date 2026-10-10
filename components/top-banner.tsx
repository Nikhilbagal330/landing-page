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
    <div className="relative flex h-9 items-center justify-center bg-orange px-10 text-sm text-white">
      <button
        type="button"
        className="absolute left-3 rounded-sm p-1 hover:bg-black/10"
        aria-label="Dismiss announcement"
        onClick={() => {
          onDismiss();
          toast("Announcement dismissed");
        }}
      >
        <X className="size-3.5" />
      </button>
      <a
        href={href}
        className="inline-flex items-center gap-1 font-medium hover:underline"
      >
        {message}
        <ArrowRight className="size-3.5" aria-hidden />
      </a>
    </div>
  );
}
