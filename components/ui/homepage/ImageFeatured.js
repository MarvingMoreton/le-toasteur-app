import classes from "./ImageFeatured.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function ImageFeatured() {
  return (
    <section className={`${classes["section-featured"]} ${"container"}`}>
      <div className={classes["box-featured-image"]}>
        <Image
          src="/images/expert-brunch.png"
          alt="test"
          // layout="fill"
          width={485}
          height={602}
        />
      </div>
      <div className={classes["box-text"]}>
        <span className={classes.subtitle}>Expert en Brunch</span>
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

          <p>
            The point of using Lor It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
        </div>
        <div className={classes["box-buttons"]}>
          <Link href="/menu">
            <a className="btn-primary">Notre menu</a>
          </Link>
          <Link href="/notre-histoire">
            <a className="btn-secondary">Notre Histoire</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ImageFeatured;