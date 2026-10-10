import type { SaleResponse } from "@/lib/types";

const REMAINING_MS =
  ((2 * 24 + 6) * 60 * 60 + 18 * 60 + 42) * 1000;

export function getSaleData(now = Date.now()): SaleResponse {
  return {
    banner: {
      message: "IDO Date",
      href: "#home",
    },
    project: {
      name: "Zoth",
      symbol: "PARTNERS & BACKERS",
      badge: "IPO COMING SOON",
      headline: "$ZOTH",
      description:
        "$ZOTH captures value across the Zoth ecosystem. Stake it to receive sZOTH and unlock better fees, rewards, and product benefits",
    },
    nav: [
      { label: "Home", href: "#home" },
      { label: "Tokenomics", href: "#tokenomics" },
      { label: "Docs", href: "#docs" },
      { label: "Blogs", href: "#blogs" },
    ],
    networks: [
      { id: "ethereum", label: "Ethereum" },
      { id: "base", label: "Base" },
      { id: "arbitrum", label: "Arbitrum" },
    ],
    hero: {
      raisedLabel: "Raised",
      raisedDisplay: "$1.84M",
      priceLabel: "Token price",
      priceDisplay: "$0.042",
      progressStart: "$0",
      progressEnd: "$4.0M",
      progress: 0.46,
      allocation: {
        start: "0",
        current: "18.4M",
        end: "40M",
        progress: 0.46,
      },
      closesAt: new Date(now + REMAINING_MS).toISOString(),
      footnote: "Fixed price · USDC settlement",
    },
    sale: {
      title: "Your Position",
      subtitle: "Connect your wallet and Sonar account to view your position.",
      progress: 0.46,
      progressLabel: "Raised toward hard cap",
      raisedDisplay: "$1.84M",
      hardCapDisplay: "$4.0M",
      columns: [
        {
          heading: "$0.042",
          rows: [
            { label: "Token price", value: "USDC" },
            { label: "Next round", value: "$0.055" },
            { label: "FDV", value: "$42M" },
          ],
        },
        {
          heading: "$4.0M",
          rows: [
            { label: "Hard cap", value: "Public" },
            { label: "Soft cap", value: "$800K" },
            { label: "Raised", value: "$1.84M" },
          ],
        },
        {
          heading: "100M",
          rows: [
            { label: "Sale supply", value: "DEMO" },
            { label: "Vesting", value: "6 months" },
            { label: "Min buy", value: "$50" },
          ],
        },
        {
          heading: "ETH",
          rows: [
            { label: "Network", value: "Mainnet" },
            { label: "Currency", value: "USDC" },
            { label: "Status", value: "Live" },
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
      heading: "Token sale details",
      description:
        "The terms of the $ZOTH IDO on Sonar. Items marked to be confirmed are published here once they are final",
      phases: [
        {
          id: "whitelist",
          kicker: "Next",
          title: "Whitelist Opens",
          detail: "20 October 2026",
          status: "active",
        },
        {
          id: "ido",
          title: "Announcement",
          detail: "To be announced",
          status: "upcoming",
        },
        {
          id: "review",
          title: "Reviewing",
          detail: "To be announced",
          status: "upcoming",
        },
        {
          id: "tge",
          title: "TGE",
          detail: "To be announced",
          status: "upcoming",
        },
      ],
    },
    details: [
      {
        id: "closedin",
        label: "Closes in",
        value: "DEMO",
        icon: "/icons/Icon (1).svg",
      },
      {
        id: "launchpad",
        label: "Launchpad",
        value: "SONAR",
        icon: "/icons/Icon (4).svg",
      },
      {
        id: "purchasemethod",
        label: "Purchase Method",
        value: "USDC",
        icon: "/icons/Icon (2).svg",
      },
      {
        id: "applications",
        label: "Applications",
        value: "4709",
        icon: "/icons/Icon (3).svg",
      },
      {
        id: "target",
        label: "Target",
        value: "After claim window",
        hint: "To be confirmed",
        icon: "/icons/Icon (4).svg",
      },
    ],
    commit: {
      heading: "Read before you commit",
      links: [
        {
          id: "terms",
          label: "Smart-contract audit",
          href: "#blogs-terms",
          action: "View",
        },
        {
          id: "risk",
          label: "Terms of service",
          href: "#blogs-risk",
          action: "View",
        },
        {
          id: "audit",
          label: "Risk Disclosure",
          href: "#blogs-audit",
          action: "View",
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
      label: "0x4e2d…a91c",
      address: "0x4e2d8b1c0a91c77e5d4a91c4e2d8b1c0a91c77e5",
    },
    footer: {
      disclaimer:
        "Explore the Zoth ecosystem and discover opportunities across decentralized finance. Review the token sale details, project documentation, and risk disclosures carefully before participating.",
      bottomDisclaimer: "Cryptocurrency and digital asset investments involve significant risk, including the possible loss of your entire investment. Please review the applicable documentation and risk disclosures before participating in the token sale. All sale details are subject to official confirmation."
    },
  };
}
