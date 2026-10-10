import type { SaleResponse } from "@/lib/types";

const REMAINING_MS =
  ((2 * 24 + 6) * 60 * 60 + 18 * 60 + 42) * 1000;

export function getSaleData(now = Date.now()): SaleResponse {
  return {
    banner: {
      message: "Demo sale is live",
      href: "#sale",
    },
    project: {
      name: "Demo",
      symbol: "DEMO",
      badge: "Live IDO",
      headline: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    },
    nav: [
      { label: "Sale", href: "#sale" },
      { label: "Timeline", href: "#timeline" },
      { label: "Partners", href: "#partners" },
      { label: "Commit", href: "#commit" },
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
      title: "Live IDO",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
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
      { name: "Borderless", src: "/partners/borderless.svg" },
      { name: "Taisu", src: "/partners/taisu.svg" },
      { name: "Blockchain", src: "/partners/blockchain.svg" },
      { name: "Chainlink", src: "/partners/chainlink.svg" },
      { name: "Coinbase", src: "/partners/coinbase.svg" },
      { name: "Mindfulness Capital", src: "/partners/mindfulness.svg" },
    ],
    timeline: {
      heading: "Token sale timeline",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
      phases: [
        {
          id: "whitelist",
          kicker: "Complete",
          title: "Whitelist",
          detail: "Mar 12",
          status: "complete",
        },
        {
          id: "public",
          kicker: "Live",
          title: "Public sale",
          detail: "Closes in",
          status: "active",
        },
        {
          id: "claim",
          kicker: "Upcoming",
          title: "Token claim",
          detail: "T+2 days",
          status: "upcoming",
        },
        {
          id: "list",
          kicker: "Upcoming",
          title: "Listing",
          detail: "T+7 days",
          status: "upcoming",
        },
      ],
    },
    details: [
      { id: "token", label: "Token", value: "DEMO", icon: "grid" },
      { id: "buyers", label: "Participants", value: "4,281", icon: "users" },
      { id: "docs", label: "Documents", value: "Terms, audit, risk", icon: "file" },
      {
        id: "vesting",
        label: "Vesting",
        value: "20% at TGE",
        hint: "Remainder over 6 months",
        icon: "target",
      },
      { id: "listing", label: "Listing", value: "After claim window", icon: "flag" },
    ],
    commit: {
      heading: "Read before you commit",
      links: [
        {
          id: "terms",
          label: "Token sale terms",
          href: "#commit-terms",
          action: "Read",
        },
        {
          id: "risk",
          label: "Risk disclosure",
          href: "#commit-risk",
          action: "Read",
        },
        {
          id: "audit",
          label: "Audit summary",
          href: "#commit-audit",
          action: "Read",
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
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  };
}
