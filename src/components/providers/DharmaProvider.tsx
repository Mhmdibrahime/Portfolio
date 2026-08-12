"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import DharmaModal from "@/components/ui/DharmaModal";

type DharmaContextType = {
  secondsLeft: number;
  formattedTime: string;
  openDharmaModal: () => void;
  resetDharmaTimer: () => void;
};

const DharmaContext = createContext<DharmaContextType>({
  secondsLeft: 6480, // 108 minutes
  formattedTime: "108:00",
  openDharmaModal: () => {},
  resetDharmaTimer: () => {},
});

export const useDharma = () => useContext(DharmaContext);

const SECRET_KEY_SEQUENCE = "4815162342";

export function DharmaProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const INITIAL_SECONDS = 108 * 60; // 6480 seconds (108 minutes)
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState("");

  // Live 108-minute countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : INITIAL_SECONDS));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format MM:SS or H:MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const resetDharmaTimer = useCallback(() => {
    setSecondsLeft(INITIAL_SECONDS);
  }, []);

  const openDharmaModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  // Global secret keypress listener for "4815162342"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore typing in input/textarea elements
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (/^[0-9]$/.test(e.key)) {
        setKeyBuffer((prev) => {
          const next = (prev + e.key).slice(-10);
          if (next === SECRET_KEY_SEQUENCE) {
            setIsModalOpen(true);
            return "";
          }
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <DharmaContext.Provider
      value={{
        secondsLeft,
        formattedTime,
        openDharmaModal,
        resetDharmaTimer,
      }}
    >
      {children}
      <DharmaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onResetTimer={resetDharmaTimer}
        locale={locale}
      />
    </DharmaContext.Provider>
  );
}
