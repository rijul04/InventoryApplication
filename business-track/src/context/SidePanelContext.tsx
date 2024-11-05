import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidePanelContextProps {
  isOpen: boolean;
  activeTab: TabOptions;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;
  setActiveTab: (tab: TabOptions) => void;
}

const SidePanelContext = createContext<SidePanelContextProps | undefined>(
  undefined,
);

export type TabOptions = "inventory" | "revenue-tracking" | "cash-flow";

export function SidePanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabOptions>("inventory");

  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);
  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <SidePanelContext.Provider
      value={{
        isOpen,
        activeTab,
        openPanel,
        closePanel,
        togglePanel,
        setActiveTab,
      }}
    >
      {children}
    </SidePanelContext.Provider>
  );
}

export const useSidePanel = () => {
  const context = useContext(SidePanelContext);
  if (!context) {
    throw new Error("useSidePanel must be used within a SidePanelProvider");
  }
  return context;
};
