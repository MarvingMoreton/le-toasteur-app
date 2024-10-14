import { SliceZone } from '@prismicio/react';
import Head from 'next/head';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import { resolveLocaleFromNext } from '../../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../../lib/withAlternateLanguageURLs';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import BlogLists from '../../components/ui/blog/BlogList';

const BlogHome = (props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { metaTitle, metaDescription, ogImage, ogImageAlt, page } = props;
  // console.log(page);
  const canonicalUrl = `https://letoasteur.com` + page.url;

  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      id: 3,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
    // Add more posts...
  ];

  return (
    <Layout alternateLanguages={page.alternate_languages}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} key="desc" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        <meta name="twitter:image" content={ogImage} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="page" />
        <meta property="og:url" content={currentRoute} />
        <meta property="og:image" content={ogImage} alt={ogImageAlt} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Le Toasteur Villeray" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
      <BlogLists posts={posts} />
    </Layout>
  );
};

export default BlogHome;

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const resolvedLocale = resolveLocaleFromNext(locale);

  const page = await client.getSingle('blog_home', {
    lang: resolvedLocale
  });
  const pageWithAlternateLanguageURLs = await withAlternateLanguageURLs(
    page,
    client
  );

  return {
    props: {
      metaTitle: page.data.meta_title ? page.data.meta_title : '',
      metaDescription: page.data.meta_description
        ? page.data.meta_description
        : '',
      ogImage: page.data.og_image.url
        ? page.data.og_image.url
        : 'https://images.prismic.io/letoasteur/05ef725c-3208-41e6-a44a-cd38e6f25471_logo-toasteur-villeray-navy.png?auto=compress,format',
      ogImageAlt: page.data.og_image.alt
        ? page.data.og_image.alt
        : 'Le Toasteur brunch restaurant',
      title: page.data.title ? page.data.title : '',
      page: pageWithAlternateLanguageURLs
    }
  };
}
