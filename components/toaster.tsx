"use client";

import { Toaster as Sonner, toast } from "sonner";

export { toast };

export function Toaster(props: React.ComponentProps<typeof Sonner>) {
  return <Sonner {...props} />;
}
