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
};

function DemoMark() {
  return (
    <img
      src="Frame 2147224717.svg"
      alt="Logo"
      className="size-[30px] object-contain"
    />
  );
}

export function Navbar({ name, links, networks }: NavbarProps) {
  const [network, setNetwork] = useState(networks[0]?.label ?? "DEMO");
  const [walletOpen, setWalletOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-20 w-full max-w-[1386px] items-center justify-between gap-3 px-4 sm:px-8 lg:h-[122px] lg:px-0">
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
          <DropdownMenu open={walletOpen} onOpenChange={setWalletOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="hidden h-[43px] w-[181px] border-orange bg-[#220800] px-[18px] text-base font-medium tracking-[-0.01em] sm:inline-flex"
              >
                Lorem ipsum
                <ChevronDown
                  className={`size-3.5 transition-transform ${walletOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[248px] rounded-none border-orange bg-[#120705] p-2 text-white shadow-[0_0_40px_rgba(255,69,9,0.18)]"
            >
              <div className="flex items-center justify-between px-3 py-2 text-sm">
                <span>Lorem ipsum</span>
                <span className="text-white/70">Demo</span>
              </div>
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, index) => (
                <DropdownMenuItem
                  key={`${item}-${index}`}
                  className="rounded-none px-3 py-2.5 text-sm"
                  onSelect={() => toast(item)}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={networkOpen} onOpenChange={setNetworkOpen}>
            <DropdownMenuTrigger asChild>
              <Button className="hidden h-[43px] w-[164px] bg-orange px-[18px] text-base font-medium tracking-[-0.01em] hover:bg-[#ff5409] sm:inline-flex">
                [XX]
                <ChevronDown
                  className={`size-3.5 transition-transform ${networkOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[230px] rounded-none border-orange bg-[#120705] p-2 text-white shadow-[0_0_40px_rgba(255,69,9,0.18)]"
            >
              <DropdownMenuItem
                className="flex items-center justify-between rounded-none px-3 py-2.5"
                onSelect={() => {
                  setNetwork("DEMO");
                  toast("Network set to DEMO");
                }}
              >
                <span>DEMO</span>
                <span className="inline-flex items-center gap-2 text-white/80">
                  [XX]
                  {network === "DEMO" ? <span aria-hidden>✓</span> : null}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="rounded-none px-3 py-2.5"
                onSelect={() => toast("Lorem ipsum")}
              >
                <span className="mr-2 inline-block size-3.5 border border-white/50 align-middle" />
                Lorem ipsum
              </DropdownMenuItem>
              {networks.slice(0, 1).map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className="rounded-none px-3 py-2.5"
                  onSelect={() => {
                    setNetwork(item.label);
                    toast(`Network set to ${item.label}`);
                  }}
                >
                  Lorem ipsum
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            <Button
              variant="outline"
              className="border-orange bg-[#220800]"
              onClick={() => toast("Lorem ipsum")}
            >
              Lorem ipsum
            </Button>
            <Button
              onClick={() => {
                setNetwork("DEMO");
                toast("Network set to DEMO");
              }}
            >
              [XX]
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
