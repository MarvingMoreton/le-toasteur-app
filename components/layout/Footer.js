import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import blueTransparentLogo from "../../public/images/logos/logo-toasteur-villeray-navy-transparent.png";

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faHashtag,
  faDuotone,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <footer className={classes["footer"]}>
        <div className={` ${classes.container} ${classes.grid} `}>
          <div className={classes["footer-col--1"]}>
            <div className={classes["image-logo-navy"]}>
              <Image
                src={blueTransparentLogo}
                alt="test"
                layout="responsive"
                // width={94}
                // height={48}
              />
            </div>
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
          <div className={classes["footer-col--3"]}>
            {/* Map - placeholder */}
            <Image
              src="/images/map-placeholder.png"
              alt="test"
              width={436}
              height={311}
            />
          </div>
          <div className={classes["footer-col--4"]}>
            <span className={classes.subtitle}>Services</span>
            <ul className={classes["col-4-nav-list"]}>
              <li>Photos</li>
              <li>Notre Histoire</li>
              <li>Contact</li>
              <li>
                <Link href="">
                  <a>English</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-col--5"]}>
            <span className={classes.subtitle}>Notre communauté</span>
            <ul className={classes["col-5-nav-list"]}>
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faHashtag} />
              </li>
            </ul>
          </div>
        </div>
        <hr className={classes.line}></hr>
      </footer>
      <div className={classes["copyright-box"]}>
        <p>
          Copyright © 2022 Le Toasteur | Fait avec&nbsp;
          <FontAwesomeIcon icon={faHeart} className={classes.heart} /> &nbsp;par
          Marving Moreton
        </p>

        <FontAwesomeIcon icon="fa-duotone fa-heart" />
      </div>
    </React.Fragment>
  );
}

export default Footer;
