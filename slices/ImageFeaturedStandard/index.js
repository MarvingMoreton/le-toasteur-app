import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import classes from '../../components/ui/homepage/ImageFeatured.module.css';

/**
 * @typedef {import("@prismicio/client").Content.ImageFeaturedStandardSlice} ImageFeaturedStandardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageFeaturedStandardSlice>} ImageFeaturedStandardProps
 * @param { ImageFeaturedStandardProps }
 */
const ImageFeaturedStandard = ({ slice }) => {
  const {
    cta_internal_link,
    cta_text_link,
    cta_internal_link_2,
    cta_text_link_2
  } = slice.primary;

  // Function to check if the link is valid
  const isValidLink = (link) => {
    return link && link.link_type === 'Document' && (link.id || link.uid);
  };

  return (
    <section className={`${classes['section-featured']} ${'container'}`}>
      <div className={classes['box-text']}>
        <span className="subtitle">{slice.primary.subtitle}</span>

        <PrismicRichText
          field={slice.primary.secondary_heading}
          components={{
            heading2: ({ children }) => (
              <h2 className={classes.title}>{children}</h2>
            )
          }}
        />

        <div className={classes['box-paragraph']}>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.paragraph} key={i} />
          ))}
        </div>

        <div className={classes['box-buttons']}>
          {/* Safe check for the first PrismicLink */}
          {isValidLink(cta_internal_link) && cta_text_link && (
            <PrismicLink document={cta_internal_link} className="btn-primary">
              {cta_text_link}
            </PrismicLink>
          )}

          {/* Safe check for the second PrismicLink */}
          {isValidLink(cta_internal_link_2) && cta_text_link_2 && (
            <PrismicLink
              document={cta_internal_link_2}
              className="btn-secondary"
            >
              {cta_text_link_2}
            </PrismicLink>
          )}
        </div>
      </div>

      <div className={classes['box-image']}>
        <PrismicNextImage
          className={classes['image-standard']}
          field={slice.primary.image}
          alt={slice.primary.image.alt}
        />
      </div>
    </section>
  );
};

export default ImageFeaturedStandard;
