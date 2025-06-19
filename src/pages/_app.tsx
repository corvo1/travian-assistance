import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutTemplate from "./layoutTemplate";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutTemplate>
      <Component {...pageProps} />
    </LayoutTemplate>
  );
}
