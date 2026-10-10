"use client";

import { useQuery } from "@tanstack/react-query";
import type { SaleResponse } from "@/lib/types";

async function fetchSale(): Promise<SaleResponse> {
  const response = await fetch("/api/sale", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("The sale could not be loaded.");
  }
  return response.json() as Promise<SaleResponse>;
}

export function useSale() {
  return useQuery({
    queryKey: ["sale"],
    queryFn: fetchSale,
    staleTime: 30_000,
  });
}
