"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/toaster";
import { CommitLinks } from "@/components/commit-links";
import { ConnectDialogs } from "@/components/connect-dialogs";
import { GridBackground } from "@/components/grid-background";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PartnersStrip } from "@/components/partners-strip";
import { SaleCard } from "@/components/sale-card";
import { SaleError, SaleSkeleton } from "@/components/sale-states";
import { SiteFooter } from "@/components/site-footer";
import { TimelineSection } from "@/components/timeline-section";
import { TopBanner } from "@/components/top-banner";
import { useCountdown } from "@/hooks/use-countdown";
import { useSale } from "@/hooks/use-sale";

export function SalePage() {
  const sale = useSale();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [connect, setConnect] = useState<"wallet" | "sonar" | null>(null);
  const countdown = useCountdown(sale.data?.hero.closesAt ?? "");
  const reduceMotion = useReducedMotion();

  if (sale.isPending) {
    return (
      <div className="relative min-h-screen">
        <GridBackground />
        <p className="sr-only" role="status">
          Loading sale data
        </p>
        <SaleSkeleton />
      </div>
    );
  }

  if (sale.isError || !sale.data) {
    return (
      <div className="relative min-h-screen">
        <GridBackground />
        <SaleError
          onRetry={() => {
            void sale.refetch().then((result) => {
              if (result.isError) toast.error("Still unable to load the sale");
              else toast.success("Sale data loaded");
            });
          }}
        />
      </div>
    );
  }

  const data = sale.data;
  const cardMotion = reduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, ease: "easeOut" as const },
    };

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <GridBackground />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-orange focus:px-3 focus:py-2"
      >
        Skip to sale
      </a>
      {bannerVisible ? (
        <TopBanner
          message={data.banner.message}
          href={data.banner.href}
          onDismiss={() => setBannerVisible(false)}
        />
      ) : null}
      <Navbar
        name={data.project.name}
        links={data.nav}
        networks={data.networks}
        onConnect={() => setConnect("wallet")}
      />
      <main className="relative z-10">
        <section
          id="sale"
          aria-label="Live IDO"
          className="mx-auto grid w-full max-w-[1248px] scroll-mt-6 items-start gap-8 px-4 pt-4 pb-16 sm:px-8 lg:grid-cols-[minmax(0,580px)_24px_minmax(0,620px)] lg:justify-center lg:gap-x-0 lg:px-0"        >
          <motion.div
            {...cardMotion}
            className="origin-top-left lg:scale-[0.9]"
          >
            <Hero
              project={data.project}
              hero={data.hero}
              countdown={countdown}
            />
          </motion.div>

          <div
            aria-hidden
            className="hidden self-stretch lg:flex lg:justify-center"
          >
            <div className="h-full w-px bg-[#541400]" />
          </div>

          <motion.div
            {...cardMotion}
            className="origin-top-left lg:scale-[0.9]"
            transition={
              reduceMotion
                ? undefined
                : { duration: 0.45, delay: 0.08, ease: "easeOut" }
            }
          >
            <SaleCard
              sale={data.sale}
              onConnectWallet={() => setConnect("wallet")}
              onConnectSonar={() => setConnect("sonar")}
            />
          </motion.div>
        </section>

        <div className="relative w-full bg-[#0B0505]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 border-y border-[#541400]"
          />

          <PartnersStrip
            partners={data.partners}
            label="PARTNERS & BACKERS"
          />
        </div>
        <section
          id="timeline"
          aria-labelledby="timeline-heading"
          className="relative mx-auto w-full max-w-[1248px] scroll-mt-6 px-4 py-12 sm:px-8 lg:px-0 lg:py-16"
        >
          <div className="relative grid items-start gap-12 lg:grid-cols-[477px_minmax(0,790px)] lg:justify-between lg:gap-x-[120px]">
            <div className="flex flex-col gap-[54px]">
              <div className="flex flex-col gap-4">
                <h2
                  id="timeline-heading"
                  className="text-5xl leading-[58px] font-normal tracking-[-0.64px]"
                >
                  {data.timeline.heading}
                </h2>
                <p className="max-w-[477px] text-[22px] leading-[1.33] tracking-[0.01em] text-white/60">
                  {data.timeline.description}
                </p>
              </div>
              <CommitLinks commit={data.commit} />
            </div>
            <TimelineSection timeline={data.timeline} details={data.details} />
          </div>
        </section>

        <SiteFooter
          socials={data.socials}
          links={data.nav}
          contract={data.contract}
          symbol={data.project.symbol}
          disclaimer={data.footer.disclaimer}
          bottomDisclaimer={data.footer.bottomDisclaimer}
        />
      </main>
      <ConnectDialogs
        kind={connect}
        onOpenChange={(open) => {
          if (!open) setConnect(null);
        }}
      />
    </div>
  );
}
