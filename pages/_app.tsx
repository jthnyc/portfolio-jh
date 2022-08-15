import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

interface AppPropsWithRedux extends AppProps {
  reduxStore: any;
}

function MyApp({ Component, pageProps }: AppPropsWithRedux) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
