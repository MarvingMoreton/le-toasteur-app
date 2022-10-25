import React from "react";
import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import classes from "../../components/ui/homepage/ImageFeatured.module.css";
import RichText from "../../components/PrismicComponents/CustomRichText";
import CustomLink from "../../components/PrismicComponents/CustomLink";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.ImageFeaturedStandardSlice} ImageFeaturedStandardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageFeaturedStandardSlice>} ImageFeaturedStandardProps
 * @param { ImageFeaturedStandardProps }
 */
const ImageFeaturedStandard = ({ slice }) => (
  <section className={`${classes["section-featured"]} ${"container"}`}>
    <div className={classes["box-text"]}>
      <span className="subtitle">{slice.primary.subtitle}</span>

      <PrismicRichText
        field={slice.primary.secondary_heading}
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
      <div className={classes["box-buttons"]}>
        {/* <PrismicLink document={slice.primary.cta_internal}></PrismicLink>
        {slice.primary.cta_internal_text}

        <PrismicLink field={slice.primary.cta_link}>My Link</PrismicLink> */}
      </div>
    </div>

    <div className={classes["box-image"]}>
      {/* <Image src={slice.primary.image.url} alt={slice.primary.image.alt} /> */}
      <PrismicNextImage
        field={slice.primary.image}
        alt={slice.primary.image.alt}
      />
    </div>
  </section>
);

export default ImageFeaturedStandard;
