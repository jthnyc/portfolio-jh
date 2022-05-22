import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html {
    height: 100%;
  }

  body {
    scroll-behavior: smooth;
  }

  ul {
    list-style-type: none;
  }

  a:link {
    text-decoration: none;
  }
`;

interface AppPropsWithRedux extends AppProps {
  reduxStore: any;
}

function MyApp({ Component, pageProps, reduxStore }: AppPropsWithRedux) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default withReduxStore(MyApp);
