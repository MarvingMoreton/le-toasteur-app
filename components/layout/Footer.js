import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className={classes["footer"]}>
        <div className={` ${classes.container} ${classes.grid} `}>
          <div className={classes["footer-col--1"]}>
            <Image
              className={classes["logo-blue-transparent"]}
              src="/images/toasteur-blue-transparent.png"
              alt="test"
              // layout="fill"
              width={94}
              height={48}
            />
            <span>
              It has survived not only five centuries, but also the leap.
            </span>
          </div>
          <div className={classes["footer-col--2"]}>
            <div className={classes["col-2--address"]}>
              <span className={classes.subtitle}>Le Toasteur Villeray</span>
              <p>767 Rue Villeray, Montréal, QC H2R 1J2</p>
              <span>(514) 759-6377</span>
            </div>
            <div className={classes["col-2--openings"]}>
              <span className={classes.subtitle}>Heures d’ouverture:</span>
              <p>Jeudi au Lundi | 8H00 - 15H00 </p>
            </div>
          </div>
          <div className={classes["footer-col--3"]}>{/* Map */}</div>
          <div className={classes["footer-col--'"]}>
            <span className={classes.subtitle}>Services</span>
            <ul>
              <li>Photos</li>
              <li>Notre Histoire</li>
              <li>Contact</li>
              <li>
                <Link href="">
                  <a>
                    <Image
                      src="/images/uk-flag.png"
                      alt="test"
                      // layout="fill"
                      width={26}
                      height={26}
                    />
                  </a>
                </Link>
                English
              </li>
            </ul>
          </div>
          <div className={classes["footer-col--5"]}>
            <span>Notre communauté</span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={classes["copyright-box"]}>
        <hr className={classes.line}></hr>
        <p>Copyright © 2022 Le Toasteur | Fait avec 💙 par Marving Moreton </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
