import React from 'react';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    imageUrl:
      'https://images.prismic.io/letoasteur/f6e306a2-87fa-4957-8279-fddd8beb9a86_og-graph-3.png?auto=format,compress',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Brunch', href: '#' },
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
      'https://images.prismic.io/letoasteur/f6e306a2-87fa-4957-8279-fddd8beb9a86_og-graph-3.png?auto=format,compress',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Restauration', href: '#' },
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
      'https://images.prismic.io/letoasteur/f6e306a2-87fa-4957-8279-fddd8beb9a86_og-graph-3.png?auto=format,compress',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Villeray', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];

/**
 * @typedef {import("@prismicio/client").Content.BlogPostListSlice} BlogPostListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostListSlice>} BlogPostListProps
 * @param { BlogPostListProps }
 */
const BlogPostList = ({ slice }) => (
  <section className="bg-white py-24 sm:py-32 sm:mx-32">
    <div className="mx-auto max-w-8xl px-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {slice.primary.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {slice.primary.description}
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                alt={post.title}
                src={post.imageUrl}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <PrismicLink
                    href={post.href}
                    className="hover:text-[#ff5c39]"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </PrismicLink>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt="Claudia Murray du Villeray Toasteur"
                  src="https://images.prismic.io/letoasteur/Zw2Xl4F3NbkBXa7r_claudia-auteur.png?auto=format,compress"
                  className="h-14 w-14 rounded-full bg-gray-100"
                  width={50}
                  height={50}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span
                      href={post.author.href}
                      className="text-[#041e42] font-semibold"
                    >
                      <span className="absolute inset-0" />
                      Claudia Murray
                    </span>
                  </p>
                  <p className=" mt-2">Co-propriétaire</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPostList;
