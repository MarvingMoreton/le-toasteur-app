import classes from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className={classes["hero-section"]}>
      <div>
        <h1>Le meilleur Brunch de l’île</h1>
        <span>Profiter de notre délicieux brunch</span>
        <a>Notre menu</a>
        <div></div>
      </div>
      <Image
        className={classes["hero-overlay"]}
        src="/images/white-overlay.png"
        alt="test"
        // layout="fill"
        width={638}
        height={549}
      />
      <div className={classes["image-box"]}>
        <Image
          className={classes["hero-illustration"]}
          src="/images/breakfast.png"
          alt="test"
          // layout="responsive"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
