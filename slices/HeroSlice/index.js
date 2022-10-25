import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import CustomRichText from "../../components/PrismicComponents/CustomRichText";
import Image from "next/image";
import classes from "../../components/ui/homepage/hero.module.css";
/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className={classes["hero-section"]}>
    {/* {JSON.stringify(slice, null, 2)} */}
    <div className={classes["box-text"]}>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />

      {/* <Image src={slice.primary.image.url} alt={slice.primary.image.alt} /> */}
      {/* <PrismicNextImage field={slice.primary.image} /> */}

      {/* {slice.items.map((item, i) => (
        <PrismicLink field={item.cta_link} key={i} className="btn-primary">
          {item.cta_text}
        </PrismicLink>
      ))} */}
    </div>
  </section>
);

export default HeroSlice;
