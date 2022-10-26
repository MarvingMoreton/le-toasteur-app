import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "../../components/ui/contact/Map.module.css";

/**
 * @typedef {import("@prismicio/client").Content.MapBoxSlice} MapBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MapBoxSlice>} MapBoxProps
 * @param { MapBoxProps }
 */
const MapBox = ({ slice }) => (
  <section className={classes["section-map"]}>
    <div className={classes["map-grid"]}>
      <div className={classes["container-banner-overlay"]}>
        <div className={classes["banner"]}>
          <span className={classes.pin}>📍</span>
          <span>{slice.primary.description}</span>
        </div>
      </div>
      <div className={classes["map-box"]}>
        <div className={classes["image-box"]}>
          <iframe
            className={classes["map"]}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3112351467425!2d-73.62349344916144!3d45.54406423602973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9193d3612eac7%3A0x574f4f87d020617!2sLe%20Toasteur%20Villeray!5e0!3m2!1sfr!2sca!4v1666017198638!5m2!1sfr!2sca"
            // width="1000"
            // height="550"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default MapBox;
