import "../styles/globals.css";

import Layout from "../components/layout/Layout";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/favicon-daj.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
