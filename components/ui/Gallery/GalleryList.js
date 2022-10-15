import classes from "./GalleryList.module.css";
import Link from "next/link";
import Image from "next/image";
import galleryOne from "../../../public/images/illustrations/gallery--1.jpg";
import galleryTwo from "../../../public/images/illustrations/gallery--2.jpg";
import galleryThree from "../../../public/images/illustrations/gallery--3.jpg";
import galleryFour from "../../../public/images/illustrations/gallery--4.jpg";
import galleryFive from "../../../public/images/illustrations/gallery--5.jpg";
import gallerySix from "../../../public/images/illustrations/gallery--6.jpg";
import gallerySeven from "../../../public/images/illustrations/gallery--7.jpg";

import React from "react";

function GalleryList(props) {
  return (
    <div className={`${classes["section-gallery"]} ${"container"}`}>
      <div className={classes["gallery"]}>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryOne}
              alt="test"
              layout="responsive"
              // width={500}
              // height={500}
            />
          </div>
        </figure>

        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryTwo}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryThree}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryFour}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryFive}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={gallerySix}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={gallerySeven}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
        {/* FIGURE */}
        <figure className={classes["gallery-item"]}>
          <div className={`${classes["image-box"]} ${classes["zoom"]}`}>
            <Image
              className="image"
              src={galleryTwo}
              alt="test"
              // layout="fill"
              // width={450}
              // height={450}
            />
          </div>
        </figure>
      </div>
      <div className={classes["btn-box"]}>
        <Link href="">
          <a className="btn-secondary">Voir plus</a>
        </Link>
      </div>
    </div>
  );
}

export default GalleryList;
