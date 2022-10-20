import classes from "./TestimonialsGallery.module.css";
import Link from "next/link";
import Image from "next/image";
import illustrationOne from "../../../public/images/illustrations/1.jpg";
import illustrationTwo from "../../../public/images/illustrations/2.jpg";
import illustrationThree from "../../../public/images/illustrations/3.jpg";
import illustrationFour from "../../../public/images/illustrations/4.jpg";
import illustrationFive from "../../../public/images/illustrations/5.jpg";
import illustrationSix from "../../../public/images/illustrations/6.jpg";
import illustrationSeven from "../../../public/images/illustrations/7.jpg";

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookTable() {
  return (
    <section className={classes["section-testimonials"]} id="testimonials">
      <div className={classes["testimonials-container"]}>
        <div className={classes["heading-titles"]}>
          <span className="subtitle">Témoignages</span>
          <h2 className="secondary-heading">
            Ce que nos clients disent de nous
          </h2>
        </div>

        <div className={classes["testimonials"]}>
          {/* CARD ITEM */}
          <div className={classes["testimonial-card"]}>
            <div className={classes["first-row-box"]}>
              <div className={classes["image-testimonial"]}>
                <Image
                  className="avatar"
                  src="/images/illustrations/portrait-dummy.jpg"
                  alt="test"
                  // layout="fill"
                  width={60}
                  height={60}
                />
              </div>
              <div className={classes["name-stars-box"]}>
                <span>Naura Silvana</span>
                <div className={classes["stars-list"]}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div className={classes["box-excerpt"]}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam “
              </p>
              <Link href="">
                <a className={classes["see-more"]}>See more...</a>
              </Link>
            </div>
          </div>
          {/* CARD ITEM */}
          <div className={classes["testimonial-card"]}>
            <div className={classes["first-row-box"]}>
              <div className={classes["image-testimonial"]}>
                <Image
                  className="avatar"
                  src="/images/illustrations/portrait-dummy.jpg"
                  alt="test"
                  // layout="fill"
                  width={60}
                  height={60}
                />
              </div>
              <div className={classes["name-stars-box"]}>
                <span>Naura Silvana</span>
                <div className={classes["stars-list"]}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div className={classes["box-excerpt"]}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam “
              </p>
              <Link href="">
                <a className={classes["see-more"]}>See more...</a>
              </Link>
            </div>
          </div>
          {/* CARD ITEM */}
          <div className={classes["testimonial-card"]}>
            <div className={classes["first-row-box"]}>
              <div className={classes["image-testimonial"]}>
                <Image
                  className="avatar"
                  src="/images/illustrations/portrait-dummy.jpg"
                  alt="test"
                  // layout="fill"
                  width={60}
                  height={60}
                />
              </div>
              <div className={classes["name-stars-box"]}>
                <span>Naura Silvana</span>
                <div className={classes["stars-list"]}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div className={classes["box-excerpt"]}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam “
              </p>
              <Link href="">
                <a className={classes["see-more"]}>See more...</a>
              </Link>
            </div>
          </div>
          {/* CARD ITEM */}
          <div className={classes["testimonial-card"]}>
            <div className={classes["first-row-box"]}>
              <div className={classes["image-testimonial"]}>
                <Image
                  className="avatar"
                  src="/images/illustrations/portrait-dummy.jpg"
                  alt="test"
                  // layout="fill"
                  width={60}
                  height={60}
                />
              </div>
              <div className={classes["name-stars-box"]}>
                <span>Naura Silvana</span>
                <div className={classes["stars-list"]}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.stars}
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div className={classes["box-excerpt"]}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam “
              </p>
              <Link href="">
                <a className={classes["see-more"]}>See more...</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["gallery"]}>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationOne}
            alt="test"
          />
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationTwo}
            alt="test"
          />{" "}
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationThree}
            alt="test"
          />{" "}
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationFour}
            alt="test"
          />{" "}
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationFive}
            alt="test"
          />{" "}
        </figure>
        <figure className={classes["gallery-item"]}>
          <Image
            className={classes["image-radius"]}
            src={illustrationSix}
            alt="test"
          />
        </figure>
      </div>
    </section>
  );
}

export default BookTable;
