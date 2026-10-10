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
        href="#sale"
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
          className="mx-auto grid max-w-[1180px] scroll-mt-6 gap-4 px-4 pt-4 pb-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5 lg:pt-6"
        >
          <motion.div {...cardMotion}>
            <Hero project={data.project} hero={data.hero} countdown={countdown} />
          </motion.div>
          <motion.div
            {...cardMotion}
            transition={
              reduceMotion
                ? undefined
                : { duration: 0.45, delay: 0.08, ease: "easeOut" }
            }
          >
            <SaleCard
              sale={data.sale}
              countdown={countdown}
              onConnectWallet={() => setConnect("wallet")}
              onConnectSonar={() => setConnect("sonar")}
            />
          </motion.div>
        </section>

        <PartnersStrip partners={data.partners} />

        <section
          id="timeline"
          aria-labelledby="timeline-heading"
          className="relative mx-auto max-w-[1180px] scroll-mt-6 px-4 py-16 sm:px-6 sm:py-24"
        >
          <p
            aria-hidden
            className="pointer-events-none absolute top-8 right-0 left-0 text-center text-[22vw] leading-none font-semibold tracking-tight text-orange/10 select-none sm:text-[12rem]"
          >
            {data.project.symbol}
          </p>
          <div className="relative grid items-start gap-12 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <h2
                id="timeline-heading"
                className="text-3xl font-medium tracking-tight sm:text-4xl"
              >
                {data.timeline.heading}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                {data.timeline.description}
              </p>
            </div>
            <div className="lg:row-span-2">
              <TimelineSection timeline={data.timeline} details={data.details} />
            </div>
            <CommitLinks commit={data.commit} />
          </div>
        </section>

        <SiteFooter
          socials={data.socials}
          contract={data.contract}
          symbol={data.project.symbol}
          disclaimer={data.footer.disclaimer}
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
