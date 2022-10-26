import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import classes from "../../components/ui/contact/Addresses.module.css";
/**
 * @typedef {import("@prismicio/client").Content.AddressesBoxSlice} AddressesBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AddressesBoxSlice>} AddressesBoxProps
 * @param { AddressesBoxProps }
 */
const AddressesBox = ({ slice }) => (
  <section className={`${classes["section-addresses"]} ${"container"}`}>
    <div className={classes["grid-addresses"]}>
      {slice?.items?.map((item, i) => (
        <React.Fragment key={i}>
          <div className={classes["card-address"]}>
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.description} />
          </div>
        </React.Fragment>
      ))}
    </div>
    <div className={classes["box-illustration"]}>
      <PrismicNextImage
        field={slice.primary.illustration}
        alt={slice.primary.illustration.alt}
      />
    </div>
  </section>
);

export default AddressesBox;
