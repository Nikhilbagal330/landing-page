import type { SaleResponse } from "@/lib/types";

const REMAINING_MS =
  ((2 * 24 + 6) * 60 * 60 + 18 * 60 + 42) * 1000;

export function getSaleData(now = Date.now()): SaleResponse {
  return {
    banner: {
      message: "Demo",
      href: "#home",
    },
    project: {
      name: "Demo",
      symbol: "DEMO",
      badge: "Lorem ipsum",
      headline: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    },
    nav: [
      { label: "Demo", href: "#home" },
      { label: "Demo", href: "#tokenomics" },
      { label: "Demo", href: "#docs" },
      { label: "Demo", href: "#blogs" },
    ],
    networks: [
      { id: "ethereum", label: "Ethereum" },
      { id: "base", label: "Base" },
      { id: "arbitrum", label: "Arbitrum" },
    ],
    hero: {
      raisedLabel: "Demo",
      raisedDisplay: "[XX]",
      priceLabel: "Lorem ipsum",
      priceDisplay: "[XX]",
      progressStart: "[XX]",
      progressEnd: "[XX]",
      progress: 0.42,
      allocation: {
        start: "[XX]",
        current: "[XX]",
        end: "[XX]",
        progress: 0.78,
      },
      closesAt: new Date(now + REMAINING_MS).toISOString(),
      footnote: "Demo",
    },
    sale: {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing",
      progress: 0.42,
      progressLabel: "Lorem ipsum",
      raisedDisplay: "[XX]",
      hardCapDisplay: "[XX]",
      footnote: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
      columns: [
        {
          heading: "[XX]",
          rows: [
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
          ],
        },
        {
          heading: "[XX]",
          rows: [
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
          ],
        },
        {
          heading: "[XX]",
          rows: [
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
          ],
        },
        {
          heading: "[XX]",
          rows: [
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
            { label: "Lorem ipsum", value: "[XX]" },
          ],
        },
      ],
    },
    partners: [
      { name: "Borderless", src: "/partners/Frame 2147224561.svg" },
      { name: "Taisu", src: "/partners/Frame 2147224562.svg" },
      { name: "Blockchain", src: "/partners/Frame 2147224563.svg" },
      { name: "Chainlink", src: "/partners/Frame 2147224564.svg" },
      { name: "Coinbase", src: "/partners/Frame 2147224565.svg" },
      { name: "Mindfulness Capital", src: "/partners/Frame 2147224566.svg" },
    ],
    timeline: {
      heading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
      phases: [
        {
          id: "whitelist",
          kicker: "Demo",
          title: "Lorem ipsum",
          detail: "[XX]",
          status: "active",
        },
        {
          id: "ido",
          title: "DEMO",
          detail: "Lorem ipsum",
          status: "upcoming",
        },
        {
          id: "review",
          title: "Demo",
          detail: "Lorem ipsum",
          status: "upcoming",
        },
        {
          id: "tge",
          title: "DEMO",
          detail: "Lorem ipsum",
          status: "upcoming",
        },
      ],
    },
    details: [
      {
        id: "closedin",
        label: "Demo",
        value: "DEMO",
        icon: "/icons/Icon (1).svg",
      },
      {
        id: "launchpad",
        label: "Lorem ipsum",
        value: "DEMO",
        icon: "/icons/Icon (4).svg",
      },
      {
        id: "purchasemethod",
        label: "Lorem ipsum",
        value: "[XX]",
        icon: "/icons/Icon (2).svg",
      },
      {
        id: "applications",
        label: "Demo",
        value: "[XX]",
        hint: "Lorem ipsum",
        valueNote: "Demo",
        icon: "/icons/Icon (3).svg",
      },
      {
        id: "target",
        label: "Lorem ipsum",
        value: "Demo",
        icon: "/icons/Icon (4).svg",
      },
    ],
    commit: {
      heading: "Lorem ipsum dolor",
      links: [
        {
          id: "terms",
          label: "Lorem ipsum",
          href: "#blogs-terms",
          action: "Demo",
        },
        {
          id: "risk",
          label: "Lorem ipsum",
          href: "#blogs-risk",
          action: "Demo",
        },
        {
          id: "audit",
          label: "Lorem ipsum",
          href: "#blogs-audit",
          action: "Demo",
        },
      ],
    },
    socials: [
      { id: "x", label: "Demo on X", href: "https://x.com" },
      { id: "youtube", label: "Demo on YouTube", href: "https://www.youtube.com" },
      { id: "discord", label: "Demo on Discord", href: "https://discord.com" },
      { id: "linkedin", label: "Demo on LinkedIn", href: "https://www.linkedin.com" },
      { id: "medium", label: "Demo on Medium", href: "https://medium.com" },
    ],
    contract: {
      label: "[XX]",
      address: "0x4e2d8b1c0a91c77e5d4a91c4e2d8b1c0a91c77e5",
    },
    footer: {
      disclaimer: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
      bottomDisclaimer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  };
}
