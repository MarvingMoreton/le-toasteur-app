import classes from "./Map.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Map() {
  return (
    <section className={classes["section-map"]}>
      <div className={classes["map-grid"]}>
        <div className={classes["container-banner-overlay"]}>
          <div className={classes["banner"]}>
            <span className={classes.pin}>📍</span>
            <span>
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which dont look even slightly
              believable!
            </span>
          </div>
        </div>
        <div className={classes["map-box"]}>
          <div className={classes["image-box"]}>
            <Image
              src="/images/contact-map-dummy.png"
              alt="test"
              // layout="fill"
              width={1120}
              height={799}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
