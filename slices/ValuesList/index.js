import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Image from "next/image";
import classes from "../../components/ui/history/Values.module.css";

/**
 * @typedef {import("@prismicio/client").Content.ValuesListSlice} ValuesListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ValuesListSlice>} ValuesListProps
 * @param { ValuesListProps }
 */
const ValuesList = ({ slice }) => (
  <section className={`${classes["section-values"]} ${"container"}`}>
    <div className={classes["card-grid"]}>
      <div className={classes["card-value"]}>
        <div className={classes["value-background"]}>
          <div className={classes["emoji-box"]}>
            <span className={classes.emoji}>{slice.primary.valueicon1}</span>
            <div className={classes["box-overlay"]}>
              <Image
                className={classes["overlay-beige"]}
                src="/images/ellipse-beige.png"
                alt="test"
                // layout="fill"
                width={105}
                height={105}
              />
            </div>
          </div>
        </div>
        <PrismicRichText
          field={slice.primary.valuetitle1}
          components={{
            heading3: ({ children }) => (
              <h3 className={classes["value-title"]}>{children}</h3>
            ),
          }}
        />
        <span className={classes["value-desc"]}>
          {slice.primary.valuedescription1}
        </span>
      </div>

      <div className={classes["card-value"]}>
        <div className={classes["value-background"]}>
          <div className={classes["emoji-box"]}>
            <span className={classes.emoji}>{slice.primary.valueicon2}</span>
            <div className={classes["box-overlay"]}>
              <Image
                className={classes["overlay-beige"]}
                src="/images/ellipse-beige.png"
                alt="test"
                // layout="fill"
                width={105}
                height={105}
              />
            </div>
          </div>
        </div>
        <PrismicRichText
          field={slice.primary.valuetitle2}
          components={{
            heading3: ({ children }) => (
              <h3 className={classes["value-title"]}>{children}</h3>
            ),
          }}
        />
        <span className={classes["value-desc"]}>
          {slice.primary.valuedescription2}
        </span>
      </div>

      <div className={classes["card-value"]}>
        <div className={classes["value-background"]}>
          <div className={classes["emoji-box"]}>
            <span className={classes.emoji}>{slice.primary.valueicon3}</span>
            <div className={classes["box-overlay"]}>
              <Image
                className={classes["overlay-beige"]}
                src="/images/ellipse-beige.png"
                alt="test"
                // layout="fill"
                width={105}
                height={105}
              />
            </div>
          </div>
        </div>
        <PrismicRichText
          field={slice.primary.valuetitle3}
          components={{
            heading3: ({ children }) => (
              <h3 className={classes["value-title"]}>{children}</h3>
            ),
          }}
        />
        <span className={classes["value-desc"]}>
          {slice.primary.valuedescription3}
        </span>
      </div>
    </div>
  </section>
);

export default ValuesList;
