import classes from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className={classes["hero-section"]}>
      <div className={classes["box-text"]}>
        <h1>
          Le meilleur &nbsp; <strong>Brunch de l’île</strong>
        </h1>
        <span>Profiter de notre délicieux brunch</span>
        <a className="btn-primary">Notre menu</a>
      </div>
      <div className={classes["box-image"]}>
        <Image
          className={classes["hero-illustration"]}
          src="/images/illustration-overlayed.png"
          alt="test"
          // layout="responsive"
          // layout="fill"
          // objectFit="contain"
          width={638}
          height={549}
        />
      </div>
    </section>
  );
}

export default Hero;
