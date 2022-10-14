import classes from "./Testimonials.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookTable() {
  return (
    <section className={`${classes["section-testimonials"]} ${"container"}`}>
      <div className={classes["grid-testimonials"]}>
        <div className={classes["list-testimonials"]}>
          <div className={classes["list-testimonials--titles"]}>
            <span>Témoignages</span>
            <h2>Ce que nos clients disent de nous</h2>
          </div>
          <div className={classes["testimonials"]}>
            <div className={classes["testimonial-card"]}>
              <div>
                <Image
                  className={classes["avatar"]}
                  src="/images/avatar-1.jpg"
                  alt="test"
                  // layout="fill"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <span>Naura Silvana</span>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam...
              </p>
            </div>
          </div>
        </div>
        <div className={classes["grid-image"]}>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
          <div className={classes["image-card"]}>
            <Image
              className={classes["image-gallery"]}
              src="/images/map-placeholder.png"
              alt="test"
              // layout="fill"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookTable;
