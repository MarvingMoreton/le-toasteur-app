import classes from "./Values.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Values() {
  return (
    <section className={`${classes["section-values"]} ${"container"}`}>
      <div className={classes["card-grid"]}>
        <div className={classes["card-value"]}>
          <div className={classes["value-background"]}>
            <div className={classes["emoji-box"]}>
              <span>☕️</span>
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
          <h3 className={classes["value-title"]}>Valeur 1</h3>
          <span className={classes["value-desc"]}>
            The point of using Lorem Ipsum is that it has a more-or-less normal.
          </span>
        </div>
        <div className={classes["card-value"]}>
          <div className={classes["value-background"]}>
            <div className={classes["emoji-box"]}>
              <span>🍳</span>
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
          <h3 className={classes["value-title"]}>Valeur 1</h3>
          <span className={classes["value-desc"]}>
            The point of using Lorem Ipsum is that it has a more-or-less normal.
          </span>
        </div>
        <div className={classes["card-value"]}>
          <div className={classes["value-background"]}>
            <div className={classes["emoji-box"]}>
              <span>🌳</span>
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
          <h3 className={classes["value-title"]}>Valeur 1</h3>
          <span className={classes["value-desc"]}>
            The point of using Lorem Ipsum is that it has a more-or-less normal.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Values;
