import PanelItems from "./PanelItems.tsx/PanelItems";
import revTracking from "@/icons/revTracking.svg";
import CashFlowIcon from "@/icons/CashFlowIcon.svg";
import ToggleIcon from "@/icons/ToggleIcon.svg";
import InventoryIcon from "@/icons/InventoryIcon.svg";

import Styles from "./SidePanel.module.css";
import { useSidePanel } from "@/context/SidePanelContext";
import { useEffect, useRef } from "react";

export default function SidePanel() {
  const { isOpen, togglePanel, setActiveTab, activeTab, closePanel } =
    useSidePanel();

  const panelRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside of the panel
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      closePanel();
    }
  };

  useEffect(() => {
    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <aside ref={panelRef} className={Styles.sidePanel}>
          <nav style={{ height: "100vh" }}>
            <ul className={Styles.itemContainer}>
              <li className={Styles.tabIcon}>
                <button onClick={() => togglePanel()}>
                  <ToggleIcon width={24} height={24} />
                </button>
              </li>
              <div style={{ gap: "20vh" }} />
              <PanelItems
                route="/testPages/inventory"
                tabValue="inventory"
                Icon={InventoryIcon}
              />
              <PanelItems
                route="/testPages/revenue-tracking"
                tabValue="revenue-tracking"
                Icon={revTracking}
              />
              <PanelItems
                route="/testPages/cash-flow"
                tabValue="cash-flow"
                Icon={CashFlowIcon}
              />
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
