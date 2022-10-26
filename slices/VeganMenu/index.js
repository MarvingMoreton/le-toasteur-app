import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import Link from "next/link";
import Image from "next/image";
// import toastOrange from "../../public/images/logos/toast-orange.png";
import logoBlue from "../../public/images/logos/logo-toasteur-villeray-navy.png";
import classes from "../../components/ui/menu/VeganMenu.module.css";

/**
 * @typedef {import("@prismicio/client").Content.VeganMenuSlice} VeganMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VeganMenuSlice>} VeganMenuProps
 * @param { VeganMenuProps }
 */
const VeganMenu = ({ slice }) => (
  <section className={classes["section-vegan-menu"]}>
    <div className={`${classes["menu-grid"]} ${"container"}`}>
      <div className={classes["box-text"]}>
        <div className={classes["left-side"]}>
          <PrismicRichText field={slice.primary.title} />
          <span>{slice.primary.description}</span>
        </div>
        <div className={classes["right-side-illustration"]}>
          <PrismicNextImage
            field={slice.primary.illustration}
            alt={slice.primary.illustration.alt}
          />
        </div>
      </div>
      <div className={classes["menu-list"]}>
        {/* ITEM */}
        {slice?.items?.map((item, i) => (
          <React.Fragment key={i}>
            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={item.breakfasttitle} />
                <span>{item.price}</span>
              </div>
              <span>{item.description}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className={classes["logo-box"]}>
      <Image
        className={classes["logo-blue-transparent"]}
        src={logoBlue}
        alt="test"
        // layout="fill"
      />
    </div>
  </section>
);

export default VeganMenu;
