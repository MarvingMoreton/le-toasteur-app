import { SliceZone } from '@prismicio/react';
import { ReactFragment } from 'react';
import { createClient } from '../prismicio';
import { components } from '../slices';
import TestimonialsBis from '../components/ui/shared/TestimonialsBis';
const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');

  return {
    props: {
      page
    }
  };
}
