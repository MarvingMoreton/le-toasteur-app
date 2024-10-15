import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import classes from '../../components/ui/homepage/BookTable.module.css';
import Link from 'next/link';
import Image from 'next/image';

import table from '../../public/images/restaurant/table-toasteur.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const isValidLink = (link) => {
  return link && link.link_type === 'Document' && (link.id || link.uid);
};
/**
 * @typedef {import("@prismicio/client").Content.BookTableSlice} BookTableSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BookTableSlice>} BookTableProps
 * @param { BookTableProps }
 */
const BookTable = ({ slice }) => (
  <section className={classes['section-book-table']}>
    <div className={`${classes['container-local']} ${'container'}`}>
      <div
        className={classes['box-left']}
        style={{
          backgroundImage: `linear-gradient(rgba(14, 14, 14, 0.5), rgba(14, 14, 14, 0.5)), url(${slice.primary.backgroundimage.url})`
        }}
      >
        <div className={classes['box-left--text']}>
          {/* H3 */}
          <PrismicRichText
            field={slice.primary.booktable}
            components={{
              heading3: ({ children }) => (
                <h3 className={classes['left-title']}>{children}</h3>
              )
            }}
          />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className={classes['box-right']}>
        {/* EMOJI */}
        <span>{slice.primary.emoji}</span>
        {/* H2 */}
        <PrismicRichText field={slice.primary.title} />

        <div className={classes['box-right-paragraphs']}>
          {/* PARAGRAPHS */}
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.paragraph} key={i} />
          ))}
        </div>
        {/* Safe check for PrismicLink */}
        {isValidLink(slice.primary.cta_internal_link) && (
          <PrismicLink
            document={slice.primary.cta_internal_link}
            className="btn-primary"
          >
            {slice.primary.cta_text_internal_link}
          </PrismicLink>
        )}
      </div>
    </div>
  </section>
);

export default BookTable;
