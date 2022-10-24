import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "../../components/ui/homepage/ImpactContent.module.css";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.LoveContentSlice} LoveContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LoveContentSlice>} LoveContentProps
 * @param { LoveContentProps }
 */
const LoveContent = ({ slice }) => (
  <section className={classes["section-impact-content"]}>
    <div className="container">
      <div className={classes["box-content"]}>
        {/* <h2 className={classes["title-impact"]}>
          Notre nourriture est faite à
          <span className={classes["title-impact-highlighted"]}>
            100% avec amour!
          </span>

        </h2> */}

        <PrismicRichText
          field={slice.primary.titleimpact}
          components={{
            heading2: ({ children }) => (
              <h2 className={classes["title-impact"]}>{children}</h2>
            ),
          }}
        />
        <span className={classes["small-text"]}>
          Toutes nos préparations sont faite à partir de produits frais en
          travaillant avec des producteurs locaux au maximum.
        </span>
      </div>
    </div>
  </section>
);

export default LoveContent;
