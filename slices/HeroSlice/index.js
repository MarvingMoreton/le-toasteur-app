import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';
import CustomRichText from '../../components/PrismicComponents/CustomRichText';
import Image from 'next/image';
import illustration from '../../public/images/illustrations/hero-img-dummy.webp';

import classes from '../../components/ui/homepage/Hero.module.css';

const isValidLink = (link) => {
  return link && link.link_type === 'Document' && (link.id || link.uid);
};

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className={classes['hero-section']}>
    <div className={classes['hero']}>
      {/* {JSON.stringify(slice, null, 2)} */}
      <div className={classes['box-text']}>
        <PrismicRichText field={slice.primary.title} />
        <span>{slice.primary.description}</span>

        {/* Safe check for PrismicLink */}
        {isValidLink(slice.primary.cta_internal_link) && (
          <PrismicLink
            document={slice.primary.cta_internal_link}
            className="btn-primary"
          >
            {slice.primary.cta_text}
          </PrismicLink>
        )}
      </div>

      {/* dynamic image zz*/}
      <div className={classes['hero-img-box']}>
        <PrismicNextImage
          field={slice.primary.image}
          className={classes['hero-img-box']}
          alt={slice.primary.image.alt}
          priority
        />
      </div>
    </div>
  </section>
);

export default HeroSlice;
