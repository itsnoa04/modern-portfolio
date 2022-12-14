import type { AppProps } from "next/app";
import "../assets/styles/base.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
