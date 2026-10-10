"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
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
    <svg viewBox="0 0 32 32" className="size-7 text-white" aria-hidden>
      <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 7.5 22.5 16 16 24.5 9.5 16Z" fill="currentColor" />
    </svg>
  );
}

export function Navbar({ name, links, networks, onConnect }: NavbarProps) {
  const [network, setNetwork] = useState(networks[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <DemoMark />
          <span className="text-lg font-medium tracking-tight">{name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 rounded-md border border-orange/30 bg-black/40 px-1 py-1 md:block"
        >
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-sm px-4 py-1.5 text-sm text-zinc-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
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

          <Button size="sm" onClick={onConnect}>
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
