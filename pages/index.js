import { SliceZone } from '@prismicio/react';
import { ReactFragment } from 'react';
import { createClient } from '../prismicio';
import { components } from '../slices';
import TestimonialsBis from '../components/ui/shared/TestimonialsBis';
import { resolveLocaleFromNext } from '../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../lib/withAlternateLanguageURLs';
import { useRouter } from 'next/router';

const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData });

//   const page = await client.getSingle('homepage');

//   return {
//     props: {
//       page
//     }
//   };
// }

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const resolvedLocale = resolveLocaleFromNext(locale);

  const page = await client.getSingle('homepage', {
    lang: resolvedLocale
  });
  const pageWithAlternateLanguageURLs = await withAlternateLanguageURLs(
    page,
    client
  );

  return {
    props: {
      // metaTitle: page.data.meta_title,
      // metaDescription: page.data.meta_description,
      // ogImage: page.data.og_image.url,
      // ogImageAlt: page.data.og_image.alt,
      page: pageWithAlternateLanguageURLs
    }
  };
}
