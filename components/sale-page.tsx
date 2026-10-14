"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/toaster";
import { CommitLinks } from "@/components/commit-links";
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
      <Navbar name={data.project.name} links={data.nav} networks={data.networks} />
      <main className="relative z-10">
        <section
          id="sale"
          aria-label="Live IDO"
          className="mx-auto w-full max-w-[1386px] scroll-mt-6 px-4 pt-4 pb-16 sm:px-8 lg:px-0"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_0px_680px] lg:gap-x-8">
            <motion.div {...cardMotion} className="h-full min-w-0">
              <Hero project={data.project} hero={data.hero} countdown={countdown} />
            </motion.div>

            <div aria-hidden className="relative hidden w-0 self-stretch lg:block">
              <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#541400]" />
            </div>

            <motion.div
              {...cardMotion}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.45, delay: 0.08, ease: "easeOut" }
              }
            >
              <SaleCard sale={data.sale} />
            </motion.div>
          </div>
        </section>

        <PartnersStrip partners={data.partners} label={"Demo\nDemo"} />
        <section
          id="timeline"
          aria-labelledby="timeline-heading"
          className="relative mx-auto w-full max-w-[1386px] scroll-mt-6 px-4 py-16 sm:px-8 lg:px-0 lg:py-20"
        >
          <div className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,477px)_minmax(0,1fr)] lg:gap-x-16">
            <div className="flex flex-col gap-[54px]">
              <div className="flex flex-col gap-4">
                <h2
                  id="timeline-heading"
                  className="text-[40px] leading-[1.15] font-normal tracking-[-0.02em] text-white lg:text-[48px]"
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
    </div>
  );
}
