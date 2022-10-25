import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import classes from "../../components/ui/gallery/GalleryList.module.css";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.GalleryListSlice} GalleryListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryListSlice>} GalleryListProps
 * @param { GalleryListProps }
 */
const GalleryList = ({ slice }) => (
  <section className={`${classes["section-gallery"]} ${"container"} `}>
    <div className={classes["gallery"]}>
      {/* FIGURE */}

      {slice.items.map((item, i) => (
        <PrismicNextImage
          key={i}
          src={item.image.url}
          alt={item.image.alt}
          className="image"
        />
      ))}

      {slice?.items?.map((item, i) => (
        <PrismicNextImage src={item.image.url} alt={item.image.alt} key={i} />
      ))}

      {/* {slice?.items?.map((item, i) => (
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <PrismicNextImage
              key={i}
              src={item.image.url}
              alt={item.image.alt}
              className="image"
            />
          </div>
        </figure>
      ))} */}
    </div>
  </section>
);

export default GalleryList;
