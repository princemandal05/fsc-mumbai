"use client";

import { createContext, useContext, useState } from "react";
import DonationModal from "@/components/DonationModal";

const DonationContext = createContext({
  openDonation: () => {},
  closeDonation: () => {},
});

export function DonationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(1500);
  const [frequency, setFrequency] = useState("monthly");

  const openDonation = (amt = 1500, freq = "monthly") => {
    setAmount(amt);
    setFrequency(freq);
    setIsOpen(true);
  };

  const closeDonation = () => {
    setIsOpen(false);
  };

  return (
    <DonationContext.Provider value={{ openDonation, closeDonation }}>
      {children}
      <DonationModal
        isOpen={isOpen}
        onClose={closeDonation}
        initialAmount={amount}
        initialFrequency={frequency}
      />
    </DonationContext.Provider>
  );
}

export const useDonation = () => useContext(DonationContext);
