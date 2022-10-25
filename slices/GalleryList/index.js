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

      {slice?.items?.map((item, i) => (
        <React.Fragment key={i}>
          <figure className={classes["gallery-item"]}>
            <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
              <PrismicNextImage
                field={item.image}
                alt={item.image.alt}
                className="image"
                layout="responsive"
              />
            </div>
          </figure>
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default GalleryList;
