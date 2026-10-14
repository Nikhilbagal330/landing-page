"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { CornerMarks } from "@/components/corner-marks";
import { Button } from "@/components/ui/button";
import type { SaleResponse } from "@/lib/types";

type Panel = "connect" | "status" | "qr" | "stats" | "swap" | "review" | "offers";

type SaleCardProps = {
  sale: SaleResponse["sale"];
};

function FrameCorners({
  insetX,
  insetY,
  armX,
  armY,
  placed,
}: {
  insetX: number;
  insetY: number;
  armX: number;
  armY: number;
  placed: "fill" | "frame";
}) {
  const corners = [
    { x: "left", y: "top" },
    { x: "right", y: "top" },
    { x: "left", y: "bottom" },
    { x: "right", y: "bottom" },
  ] as const;

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {corners.map(({ x, y }) => (
        <span key={`${x}-${y}`}>
          <span
            className="absolute w-px bg-[#FF4509]"
            style={
              placed === "fill"
                ? { [x]: insetX - 1, [y]: 0, height: armY }
                : { [x]: 0, [y]: 0, height: armY }
            }
          />
          <span
            className="absolute h-px bg-[#FF4509]"
            style={
              placed === "fill"
                ? { [x]: 0, [y]: insetY - 1, width: armX }
                : { [x]: 0, [y]: 0, width: armX }
            }
          />
        </span>
      ))}
    </span>
  );
}

function BracketButton({
  children,
  variant = "solid",
  onClick,
  disabled = false,
}: {
  children: string;
  variant?: "solid" | "outline" | "muted";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const solid = variant === "solid";
  const muted = variant === "muted";
  const frame = solid ? 78 : 72;
  const insetX = solid ? 7.6 : 5.605;
  const insetY = (frame - 59) / 2;

  return (
    <div className="relative w-full" style={{ height: frame }}>
      <Button
        variant={solid ? "default" : "ghost"}
        disabled={disabled}
        onClick={onClick}
        className={`absolute rounded-none px-6 text-[17.38px] font-medium tracking-[-0.218px] text-white disabled:opacity-100 ${
          solid
            ? "bg-[#FF4509] leading-[30px] hover:bg-[#ff5409]"
            : muted
              ? "border border-[#FF4509]/40 bg-[#4a1c0c] leading-[21px] hover:bg-[#4a1c0c]"
              : "border border-[#FF4509] bg-transparent leading-[21px] hover:bg-transparent"
        }`}
        style={{ left: insetX, right: insetX, top: insetY, height: 59 }}
      >
        {children}
      </Button>
      <FrameCorners
        insetX={insetX}
        insetY={insetY}
        armX={7.6}
        armY={solid ? 9.58 : 8.84}
        placed={solid ? "fill" : "frame"}
      />
    </div>
  );
}

function CardShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 -z-10 h-[391px] w-[315px] rotate-[19deg] rounded-full bg-orange opacity-70 blur-[180px]"
      />
      <article
        className="relative border border-[#541400] bg-[#0B0303] p-[22px] shadow-[0_0_122px_-50px_rgba(255,69,9,0.11)]"
      >
        {children}
      </article>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-2.5 text-sm text-white/80">
      <span>{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

function Radio({ selected }: { selected: boolean }) {
  return (
    <span
      className={`grid size-4 place-items-center rounded-full border ${
        selected ? "border-[#0052FF]" : "border-white/40"
      }`}
      aria-hidden
    >
      {selected ? <span className="size-2 rounded-full bg-[#0052FF]" /> : null}
    </span>
  );
}

export function SaleCard({ sale }: SaleCardProps) {
  const [panel, setPanel] = useState<Panel>("connect");
  const [checks, setChecks] = useState([false, false]);
  const [amountFocused, setAmountFocused] = useState(false);
  const [amountSet, setAmountSet] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [payToken, setPayToken] = useState<"demo" | "alt">("demo");

  return (
    <CardShell>
      {panel === "connect" ? (
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-[386px] max-w-full flex-col items-start gap-2">
            <h2 className="text-[16px] font-medium uppercase leading-[19px] tracking-[0.2px] text-white">
              {sale.title}
            </h2>
            <p className="text-[18px] font-normal leading-[21px] tracking-[0.2px] text-white/80">
              {sale.subtitle}
            </p>
          </div>
          <div className="flex w-full flex-col pt-4">
            <div className="flex w-full flex-col gap-4">
              <BracketButton onClick={() => setPanel("status")}>Lorem ipsum</BracketButton>
              <BracketButton variant="outline" onClick={() => setPanel("qr")}>
                Lorem ipsum
              </BracketButton>
            </div>
          </div>
          <p className="w-full text-center text-[14px] font-normal leading-[17px] tracking-[0.2px] text-white/80">
            {sale.footnote}
          </p>
        </div>
      ) : null}

      {panel === "status" ? (
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-orange">
            <span className="size-1.5 rounded-full bg-orange" />
            LOREM IPSUM
          </p>
          <h2 className="text-base font-medium tracking-[0.08em] text-white">LOREM IPSUM</h2>
          <p className="text-sm leading-5 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut
          </p>
          <BracketButton onClick={() => setPanel("stats")}>Lorem ipsum</BracketButton>
        </div>
      ) : null}

      {panel === "qr" ? (
        <div className="flex flex-col gap-5">
          <h2 className="text-base font-medium tracking-[0.08em] text-white">LOREM IPSUM</h2>
          <div className="flex gap-6">
            <div className="grid h-[168px] w-[210px] place-items-center bg-[#2a2a2a]" />
            <div className="flex flex-1 flex-col justify-center gap-4 text-sm text-white/80">
              {["Lorem ipsum", "Lorem ipsum dolor sit amet"].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className="flex items-start gap-2 text-left"
                  onClick={() =>
                    setChecks((current) => {
                      const next = [...current];
                      next[index] = !next[index];
                      return next;
                    })
                  }
                >
                  <span
                    className={`mt-0.5 grid size-4 shrink-0 place-items-center border ${
                      checks[index] ? "border-orange bg-orange text-white" : "border-white/50"
                    }`}
                  >
                    {checks[index] ? "✓" : ""}
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <Button
            className="h-11"
            disabled={!checks.every(Boolean)}
            onClick={() => setPanel("status")}
          >
            Lorem ipsum
          </Button>
        </div>
      ) : null}

      {panel === "stats" ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium tracking-[0.08em] text-white">LOREM IPSUM</h2>
          <div className="grid grid-cols-4 gap-3 text-xs text-orange">
            {sale.columns.map((column, columnIndex) => (
              <span key={`head-${columnIndex}`}>{column.heading}</span>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-x-3">
            {sale.columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col">
                {column.rows.map((row, rowIndex) => (
                  <div key={`${columnIndex}-${rowIndex}`} className="border-b border-white/10 py-2">
                    <p className="text-[11px] text-white/55">{row.label}</p>
                    <p className="text-sm text-white">{row.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button className="h-12" onClick={() => setPanel("swap")}>
              [XX]
            </Button>
            <Button className="h-12" onClick={() => setPanel("offers")}>
              [XX]
            </Button>
          </div>
        </div>
      ) : null}

      {panel === "swap" ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm text-white/80">
            <button type="button" className="inline-flex items-center gap-1">
              [XX] <ChevronDown className="size-3.5" />
            </button>
            <span>[XX]</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <button
              type="button"
              className="relative px-1 py-3 text-left text-[32px] font-medium"
              onClick={() => {
                setAmountFocused(true);
                setAmountSet(true);
              }}
            >
              {amountFocused ? <CornerMarks /> : null}
              [XX]
            </button>
            <span className="grid size-8 place-items-center rounded-full border border-white/20 text-white/70">
              ↓
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <button
                type="button"
                className="flex items-center justify-between gap-3"
                onClick={() => setPayToken("demo")}
              >
                <span>Demo</span>
                <span className="inline-flex items-center gap-2">
                  <Radio selected={payToken === "demo"} />
                  DEMO
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-between gap-3 text-white/80"
                onClick={() => setPayToken("alt")}
              >
                <span>[XX]</span>
                <span className="inline-flex items-center gap-2">
                  <Radio selected={payToken === "alt"} />
                  Demo
                </span>
              </button>
            </div>
          </div>
          <div>
            {[
              ["Lorem ipsum", "[XX]"],
              ["Lorem ipsum dolor", "[XX]"],
              ["Lorem ipsum dolor", "[XX]"],
              ["Lorem ipsum", "[XX]"],
              ["Demo", "[XX]"],
              ["Lorem ipsum", "[XX]"],
            ].map(([label, value], index) => (
              <Row key={`swap-${index}`} label={label} value={value} />
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-white/80">
            <button
              type="button"
              className="flex items-start gap-2 text-left"
              onClick={() => setAgreed((value) => !value)}
            >
              <span
                className={`mt-0.5 grid size-4 shrink-0 place-items-center border ${
                  agreed ? "border-orange bg-orange" : "border-white/40"
                }`}
              >
                {agreed ? <span className="size-2 bg-white" /> : null}
              </span>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            </button>
            <span className="shrink-0 rounded-full bg-[#0052FF] px-2 py-0.5 text-[11px] font-semibold text-white">
              base
            </span>
          </div>
          <BracketButton
            variant={agreed ? "solid" : amountSet ? "muted" : "muted"}
            disabled={!agreed}
            onClick={() => setPanel("review")}
          >
            {amountSet ? "[XX]" : "Lorem ipsum"}
          </BracketButton>
        </div>
      ) : null}

      {panel === "review" ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="h-[140px] w-[180px] bg-[#2c2c2c]" />
          <h2 className="text-sm font-medium tracking-[0.14em] text-white">LOREM IPSUM</h2>
          <div className="w-full text-left">
            {[
              ["Demo", "[XX]"],
              ["Demo", "[XX]"],
              ["Demo", "[XX]"],
              ["Lorem ipsum", "[XX]"],
              ["Lorem ipsum", "[XX]"],
              ["Lorem ipsum", "[XX]"],
            ].map(([label, value], index) => (
              <Row key={`${label}-${index}`} label={label} value={value} />
            ))}
          </div>
          <div className="grid w-full grid-cols-2 gap-3">
            <Button className="h-12" onClick={() => setPanel("offers")}>
              Lorem ipsum
            </Button>
            <Button variant="outline" className="h-12" onClick={() => setPanel("connect")}>
              Lorem ipsum
            </Button>
          </div>
        </div>
      ) : null}

      {panel === "offers" ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium tracking-[0.08em] text-white">LOREM IPSUM</h2>
          {[0, 1].map((offer) => (
            <div key={offer} className="flex flex-col gap-3 border border-[#541400] bg-black/40 p-4">
              <div className="flex justify-between text-sm text-white/70">
                <span>[XX]</span>
                <span>[XX]</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm">
                  <span className="text-white/60">DEMO </span>
                  <span className="text-2xl font-medium">[XX]</span>
                  <span className="text-white/60"> DEMO</span>
                </p>
                <p className="text-right text-sm">
                  <span className="text-2xl font-medium">[XX]</span>
                  <span className="text-white/60"> Demo</span>
                </p>
              </div>
              <Button className="h-12" onClick={() => setPanel("review")}>
                Lorem ipsum
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </CardShell>
  );
}
