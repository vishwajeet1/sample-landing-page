import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@ui/styles/globals.css";
import { wrapper } from "redux/store";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
