import classes from "./GalleryList.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
function GalleryList(props) {
  return (
    <div className={`${classes["section-gallery"]} ${"container"}`}>
      <div className={classes["gallery"]}>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={507}
            height={509}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={507}
            height={509}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            src="/images/office-image.png"
            alt="test"
            // layout="fill"
            width={450}
            height={450}
          />
        </figure>
      </div>
    </div>
  );
}

export default GalleryList;