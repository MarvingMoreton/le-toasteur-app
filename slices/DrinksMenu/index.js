import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import logoBlue from "../../public/images/logos/logo-toasteur-villeray-navy.png";
import classes from "../../components/ui/menu/Drinks.module.css";
/**
 * @typedef {import("@prismicio/client").Content.DrinksMenuSlice} DrinksMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DrinksMenuSlice>} DrinksMenuProps
 * @param { DrinksMenuProps }
 */
const DrinksMenu = ({ slice }) => (
  <section className={classes["section-drinks-menu"]}>
    <div className={`${classes["menu-grid"]} ${"container"}`}>
      <div className={classes["box-text"]}>
        <div className={classes["left-side"]}>
          <h2>Boissons</h2>
        </div>
        <div className={classes["right-side-illustration"]}>
          <PrismicNextImage
            field={slice.primary.illustration}
            alt={slice.primary.illustration.alt}
          />
        </div>
      </div>
      <div className={classes["menu-list"]}>
        <div className={classes["left-grid"]}>
          {/* First box */}
          <div className={classes["upper-box"]}>
            {/* item */}
            <span>{slice.primary.simpledouble}</span>
            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle1} />
                <span>{slice.primary.stddrinkprice1}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle2} />
                <span>{slice.primary.stddrinkprice2}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle3} />
                <span>{slice.primary.stddrinkprice3}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle4} />
                <span>{slice.primary.stddrinkprice4}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle5} />
                <span>{slice.primary.stddrinkprice5}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle6} />
                <span>{slice.primary.stddrinkprice6}</span>
              </div>
            </div>
          </div>

          <div className={classes["bottom-box"]}>
            {/* item */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle7} />
                <span>{slice.primary.stddrinkprice7}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle8} />
                <span>{slice.primary.stddrinkprice8}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle9} />
                <span>{slice.primary.stddrinkprice9}</span>
              </div>
            </div>

            <div className={classes["item-card"]}>
              <div className={classes["title-row"]}>
                <PrismicRichText field={slice.primary.stddrinktitle10} />
                <span>{slice.primary.stddrinkprice10}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["right-grid"]}>
          {/* Items */}

          {slice?.items?.map((item, i) => (
            <React.Fragment key={i}>
              <div className={classes["item-card"]}>
                <div className={classes["title-row-right"]}>
                  <PrismicRichText field={item.drinktitle} />
                  <span>{item.price}</span>
                </div>
                <span>{item.description}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className={classes["sentence"]}>
          <span>{slice.primary.instruction}</span>
        </div>
      </div>
    </div>

    <div className={classes["logo-box"]}>
      <Image
        className={classes["logo-blue-transparent"]}
        src={logoBlue}
        alt="test"
        // layout="fill"
        // width={207}
        // height={106}
      />
    </div>
  </section>
);

export default DrinksMenu;
