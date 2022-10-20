import classes from "./ImageFeatured.module.css";
import Link from "next/link";
import Image from "next/image";
import illustration from "../../../public/images/illustrations/illustration-brunch-eggs.png";

import React from "react";

function ImageFeatured() {
  return (
    <section className={`${classes["section-featured"]} ${"container"}`}>
      <div className={classes["box-text"]}>
        <span className="subtitle">Expert en Brunch</span>
        <h2 className={classes.title}>Le spécialiste des Brunchs</h2>
        <div className={classes["box-paragraph"]}>
          <p>
            The point of using Lor It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
          <p>
            The point of using Lor It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
        </div>
        <div className={classes["box-buttons"]}>
          <Link href="/menu">
            <a className="btn-primary">Notre Menu</a>
          </Link>
          <Link href="/notre-histoire">
            <a className="btn-secondary">Notre Histoire</a>
          </Link>
        </div>
      </div>
      <div className={classes["box-image"]}>
        <Image
          src={illustration}
          alt="test"
          layout="responsive"
          // width={485}
          // height={602}
        />
      </div>
    </section>
  );
}

export default ImageFeatured;
