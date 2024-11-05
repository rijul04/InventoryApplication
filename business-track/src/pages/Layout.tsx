import React from "react";
import SidePanel from "@/components/SidePanel/SidePanel";
import SidePanelToggle from "@/components/SidePanelToggle/SidePanelToggle";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <SidePanel />
      <div>
        <SidePanelToggle />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
