"use client";

import { toast } from "@/components/toaster";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type ConnectKind = "wallet" | "sonar" | null;

const WALLETS = ["MetaMask", "WalletConnect", "Coinbase Wallet"];
const SONAR = ["Sonar ID", "Sonar Desktop", "Sonar Mobile"];

type ConnectDialogsProps = {
  kind: ConnectKind;
  onOpenChange: (open: boolean) => void;
};

export function ConnectDialogs({ kind, onOpenChange }: ConnectDialogsProps) {
  const options = kind === "sonar" ? SONAR : WALLETS;
  const title = kind === "sonar" ? "Connect Sonar" : "Connect Wallet";

  return (
    <Dialog open={kind !== null} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          Placeholder only. No wallet or Sonar session is created.
        </DialogDescription>
        <ul className="mt-5 space-y-2">
          {options.map((option) => (
            <li key={option}>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  toast(`${option} is not connected in this demo`);
                }}
              >
                {option}
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
