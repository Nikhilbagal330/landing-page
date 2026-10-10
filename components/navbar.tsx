"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { CornerMarks } from "@/components/corner-marks";
import { toast } from "@/components/toaster";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = { label: string; href: string };
type Network = { id: string; label: string };

type NavbarProps = {
  name: string;
  links: NavItem[];
  networks: Network[];
  onConnect: () => void;
};

function DemoMark() {
  return (
    <span className="grid size-[30px] place-items-center rounded-full bg-white">
      <svg viewBox="0 0 28 28" className="size-[22px]" aria-hidden>
        <path d="M14 4.6 22.2 14 14 23.4 5.8 14Z" fill="#030303" />
      </svg>
    </span>
  );
}

export function Navbar({ name, links, networks, onConnect }: NavbarProps) {
  const [network, setNetwork] = useState(networks[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-20 max-w-[1698px] items-center justify-between gap-3 px-4 sm:px-8 lg:h-[122px] xl:px-[156px]">
        <a href="#top" className="flex items-center gap-2">
          <DemoMark />
          <span className="text-xl leading-none font-semibold tracking-tight lg:text-[26px]">{name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="relative hidden bg-[#23120C] px-8 py-2.5 md:block"
        >
          <CornerMarks />
          <ul className="flex items-center gap-8 lg:gap-14">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm tracking-[-0.02em] text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden h-[43px] px-[18px] text-base sm:inline-flex">
                {network?.label ?? "Network"}
                <ChevronDown className="size-3.5" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {networks.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  onSelect={() => {
                    setNetwork(item);
                    toast(`Network set to ${item.label}`);
                  }}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="h-[43px] px-[18px] text-base" onClick={onConnect}>
            Connect
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogContent>
          <DialogTitle>Menu</DialogTitle>
          <DialogDescription>Jump to a section or choose a network.</DialogDescription>
          <nav aria-label="Mobile" className="mt-4">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2 hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            {networks.map((item) => (
              <Button
                key={item.id}
                variant={item.id === network?.id ? "default" : "outline"}
                onClick={() => {
                  setNetwork(item);
                  toast(`Network set to ${item.label}`);
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => {
                setMenuOpen(false);
                onConnect();
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
