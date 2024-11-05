import React from "react";
import ToggleIcon from "@/icons/ToggleIcon.svg";
import { useSidePanel } from "@/context/SidePanelContext";

import Styles from "./SidePanelToggle.module.css";

export default function SidePanelToggle() {
  const { isOpen, togglePanel } = useSidePanel();

  return (
    <>
      {!isOpen && (
        <button onClick={togglePanel} className={Styles.toggleButtonLocation}>
          <ToggleIcon width={24} height={24} className={Styles.test} />
        </button>
      )}
    </>
  );
}
