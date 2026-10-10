export type SaleStatus = "complete" | "active" | "upcoming";

export type DetailIcon = string;

export type SaleResponse = {
  banner: {
    message: string;
    href: string;
  };
  project: {
    name: string;
    symbol: string;
    badge: string;
    headline: string;
    description: string;
  };
  nav: { label: string; href: string }[];
  networks: { id: string; label: string }[];
  hero: {
    raisedLabel: string;
    raisedDisplay: string;
    priceLabel: string;
    priceDisplay: string;
    progressStart: string;
    progressEnd: string;
    progress: number;
    allocation: {
      start: string;
      current: string;
      end: string;
      progress: number;
    };
    closesAt: string;
    footnote: string;
  };
  sale: {
    title: string;
    subtitle: string;
    progress: number;
    progressLabel: string;
    raisedDisplay: string;
    hardCapDisplay: string;
    columns: {
      heading: string;
      rows: { label: string; value: string }[];
    }[];
  };
  partners: { name: string; src: string }[];
  timeline: {
    heading: string;
    description: string;
    phases: {
      id: string;
      kicker?: string;
      title: string;
      detail: string;
      status: SaleStatus;
    }[];
  };
  details: {
    id: string;
    label: string;
    value: string;
    hint?: string;
    icon: DetailIcon;
  }[];
  commit: {
    heading: string;
    links: { id: string; label: string; href: string; action: string }[];
  };
  socials: { id: string; label: string; href: string }[];
  contract: { label: string; address: string };
  footer: { disclaimer: string, bottomDisclaimer: string };
};
