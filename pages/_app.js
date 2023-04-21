import '../styles/globals.css';

import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { letoasteur } from '../prismicio';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {/* <Layout> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/images/logos/toast-blue-navy-ellipsed.png"
        />
      </Head>

      <PrismicPreview repositoryName={letoasteur}>
        <Component {...pageProps} />
      </PrismicPreview>
      {/* </Layout> */}
    </PrismicProvider>
  );
}

export default MyApp;
