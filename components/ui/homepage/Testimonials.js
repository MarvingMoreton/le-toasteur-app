import classes from "./Testimonials.module.css";
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
    <section className={classes["section-testimonials"]}>
      <div className={classes["grid-testimonials"]}>
        <div className={classes["testimonial-grid-side"]}>
          <div className={classes["list-testimonials--titles"]}>
            <span className="subtitle">Témoignages</span>
            <h2 className="secondary-heading">
              Ce que nos clients disent de nous
            </h2>
          </div>
          <div className={classes["list-testimonials"]}>
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
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                  </div>
                </div>
              </div>
              <div className={classes["box-excerpt"]}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam"
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
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                  </div>
                </div>
              </div>
              <div className={classes["box-excerpt"]}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam"
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
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                  </div>
                </div>
              </div>
              <div className={classes["box-excerpt"]}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam"
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
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                    <FontAwesomeIcon icon={faStar} className={classes.stars} />
                  </div>
                </div>
              </div>
              <div className={classes["box-excerpt"]}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam"
                </p>
                <Link href="">
                  <a className={classes["see-more"]}>See more...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["grid-image"]}>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationOne}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationTwo}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationThree}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationFour}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationFive}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
          {/* ILLUSTRATION IMAGE */}
          <div className={classes["image"]}>
            <Image
              src={illustrationSix}
              alt="test"
              layout="responsive"
              // width={200}
              // height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookTable;
