"use client";

import { useEffect, useState } from "react";

export type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  label: string;
  expired: boolean;
  ready: boolean;
};

const EMPTY: Countdown = {
  days: "--",
  hours: "--",
  minutes: "--",
  seconds: "--",
  label: "Closes in",
  expired: false,
  ready: false,
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function useCountdown(closesAt: string): Countdown {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) return EMPTY;

  const remaining = Math.max(0, new Date(closesAt).getTime() - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const expired = remaining === 0;

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    label: expired ? "Sale closed" : "Closes in",
    expired,
    ready: true,
  };
}
