import classes from "./ImageFeatured.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function ImageFeatured() {
  return (
    <section className={classes["section-featured"]}>
      <div>
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
        <p>
          The point of using Lor It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout.
        </p>
        <br></br>
        <p>
          The point of using Lor It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout.
        </p>
        <div>
          <Link href="">
            <a>Notre menu</a>
          </Link>
          <Link href="">
            <a>Notre Histoire</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ImageFeatured;
