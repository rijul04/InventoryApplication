import { SidePanelProvider } from "@/context/SidePanelContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidePanelProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidePanelProvider>
  );
}
