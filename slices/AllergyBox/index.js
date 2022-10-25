import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Image from "next/image";
import classes from "../../components/ui/Shared/Announcement.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandDots } from "@fortawesome/free-solid-svg-icons";

/**
 * @typedef {import("@prismicio/client").Content.AllergyBoxSlice} AllergyBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AllergyBoxSlice>} AllergyBoxProps
 * @param { AllergyBoxProps }
 */
const AllergyBox = ({ slice }) => (
  <section className={`${classes["section-book-table"]} ${"container"}`}>
    <div className={classes["container-book-table"]}>
      <div className={classes["box-left"]}>
        <div className={classes["box-left--text"]}>
          <PrismicRichText field={slice.primary.allergiestitle} />
          <FontAwesomeIcon icon={faHandDots} />
        </div>
      </div>
      <div className={classes["box-right"]}>
        <span>{slice.primary.emoji}</span>
        <PrismicRichText field={slice.primary.title} />
        <div className={classes["box-right-paragraphs"]}>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.paragraph} key={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AllergyBox;
