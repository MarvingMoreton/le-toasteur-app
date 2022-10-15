import classes from "./ImageFeatured.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import teamPhoto from "../../../public/images/restaurant/team-photo--1.jpg";

function ImageFeatured(props) {
  return (
    <section className={`${classes["section-image-featured"]} ${"container"}`}>
      <div className={classes["grid-image-featured"]}>
        <div className={classes["box-image"]}>
          <Image
            src={teamPhoto}
            alt="test"
            className="image"
            // layout="fill"
            // width={663}
            // height={758}
          />
        </div>
        <div className={classes["box-overlay"]}>
          <Image
            className={classes["overlay-beige"]}
            src="/images/background-beige-rectangle.png"
            alt="test"
            // layout="fill"
            width={400}
            height={380}
          />
        </div>
        <div className={classes["box-text"]}>
          <span className={classes.subtitle}>Le Toasteur Villeray</span>
          <h2 className={classes.title}>Notre Histoire</h2>
          <div className={classes["box-paragraph"]}>
            <p>
              The point of using Lor It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
            </p>
            <p>
              The point of using Lor It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
            </p>
            <p>
              Waters make fish every without firmament saw had. Morning air
              subdue. Our. Air very one. Whales grass is fish whales winged
              night yielding land creeping that seed appear were bearing.
            </p>

            <p>
              The point of using Lor It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
            </p>
            <p>
              Waters make fish every without firmament saw had. Morning air
              subdue. Our. Air very one. Whales grass is fish whales winged
              night yielding land creeping that seed appear were bearing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageFeatured;
