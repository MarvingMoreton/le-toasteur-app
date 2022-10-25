import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "../../components/ui/Shared/Banner.module.css";

/**
 * @typedef {import("@prismicio/client").Content.BannerSlice} BannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSlice>} BannerProps
 * @param { BannerProps }
 */
const Banner = ({ slice }) => (
  <div
    className={classes["banner-background"]}
    style={{
      background: `url(${slice.primary.backgroundimage.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center",
    }}
  >
    <div className={classes["text-box"]}>
      <PrismicRichText field={slice.primary.title} />
      <span>{slice.primary.description}</span>
    </div>
  </div>
);

export default Banner;
