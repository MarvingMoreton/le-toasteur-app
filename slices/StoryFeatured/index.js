import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import Link from "next/link";
import Image from "next/image";
import classes from "../../components/ui/History/ImageFeatured.module.css";

/**
 * @typedef {import("@prismicio/client").Content.StoryFeaturedSlice} StoryFeaturedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StoryFeaturedSlice>} StoryFeaturedProps
 * @param { StoryFeaturedProps }
 */
const StoryFeatured = ({ slice }) => (
  <section className={`${classes["section-image-featured"]} ${"container"}`}>
    <div className={classes["grid-image-featured"]}>
      <div className={classes["box-image"]}>
        <PrismicNextImage
          field={slice.primary.image}
          alt={slice.primary.image.alt}
        />
      </div>
      <div className={classes["box-overlay"]}>
        <Image
          className={classes["overlay-beige"]}
          src="/images/background-beige-rectangle.png"
          alt="test"
          // layout="fill"
          width={400}
          height={320}
        />
      </div>
      <div className={classes["box-text"]}>
        <span className="subtitle">{slice.primary.subtitle}</span>
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className={classes.title}>{children}</h2>
            ),
          }}
        />
        <div className={classes["box-paragraph"]}>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.paragraph} key={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StoryFeatured;
