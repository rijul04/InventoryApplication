import Link from "next/link";

import Styles from "./PanelItems.module.css";
import { TabOptions, useSidePanel } from "@/context/SidePanelContext";

type Props = {
  route: string;
  tabValue: TabOptions;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function PanelItems({ route, tabValue, Icon }: Props) {
  const { setActiveTab, activeTab } = useSidePanel();

  const valueToTitle: Record<TabOptions, string> = {
    inventory: "Inventory",
    "revenue-tracking": "Rev Tracking",
    "cash-flow": "Cash Flow",
  };

  return (
    <button className={Styles.item} onClick={() => setActiveTab(tabValue)}>
      {/* change to button instead of link? then push or whatever the best method is? */}
      <Link href={route}>
        {/* make icon bigger and writting font bigger when chosen */}
        <Icon
          width={32}
          height={32}
          className={`${activeTab === tabValue && Styles.highlighted}`}
        />
        <h4>{valueToTitle[tabValue]}</h4>
      </Link>
    </button>
  );
}
