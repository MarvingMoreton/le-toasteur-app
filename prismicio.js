import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const letoasteur = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * Locale overrides for nicer URLs.
 */
export const localeOverrides = {
  'fr-fr': 'fr'
};

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'homepage',
    path: '/:lang?'
  },
  {
    type: 'homepage',
    lang: 'en-ca',
    path: '/en-ca'
  },
  {
    type: 'blog_home',
    path: '/blog/:lang?'
  },
  {
    type: 'blog_home',
    lang: 'en-ca',
    path: '/en-ca/blog'
  },
  {
    type: 'page',
    path: '/:lang?/:uid'
  },
  {
    type: 'page',
    lang: 'en-ca',
    path: '/en-ca/:uid'
  }
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
    defaultParams: {
      ...config.defaultParams,
      lang: '*'
    }
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });

  return client;
};
// export const createClient = (config = {}) => {
//   const client = prismic.createClient(sm.apiEndpoint, {
//     routes,
//     ...config
//   });

//   prismicNext.enableAutoPreviews({
//     client,
//     previewData: config.previewData,
//     req: config.req
//   });

//   return client;
// };
