import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import blueTransparentLogo from "../../public/images/logos/logo-toasteur-villeray-navy-transparent.png";
import facebook from "../../public/images/socials/square-facebook.svg";
import instagram from "../../public/images/socials/square-instagram.svg";

import { Facebook, Instagram, Google } from "@mui/icons-material";

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <footer className={classes["footer"]}>
        <div className={`${classes["footer-grid"]} ${"container"}`}>
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
              <p>Jeudi au Lundi:</p>
              <p> 8H00 - 15H00</p>
            </div>
          </div>
          <div className={classes["footer-col--3"]}>
            <iframe
              className={classes["map"]}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3112351467425!2d-73.62349344916144!3d45.54406423602973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9193d3612eac7%3A0x574f4f87d020617!2sLe%20Toasteur%20Villeray!5e0!3m2!1sfr!2sca!4v1666017198638!5m2!1sfr!2sca"
              // width="480"
              // height="320"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={classes["footer-col--4"]}>
            <div>
              <span className={classes.subtitle}>Services</span>
              <ul className={classes["col-4-nav-list"]}>
                <li>
                  <Link href="/gallerie">
                    <a>Photos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/notre-histoire">
                    <a>Notre Histoire</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
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
                  <Link href="https://fr-ca.facebook.com/LeToasteurVilleray/">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className={classes["icon-svg"]}>
                        <Facebook sx={{ fontSize: 30 }} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/toasteurvilleray/?hl=fr">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className={classes["icon-svg"]}>
                        <Instagram sx={{ fontSize: 30 }} />
                      </div>{" "}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className={classes["icon-svg"]}>
                        <Google sx={{ fontSize: 30 }} />
                      </div>{" "}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className={classes["footer-col--5"]}>
            <span className={classes.subtitle}>Notre communauté</span>
            <ul className={classes["col-5-nav-list"]}>
              <li>
                <Link href="https://fr-ca.facebook.com/LeToasteurVilleray/">
                  <a target="_blank" rel="noopener noreferrer">
                    <div className={classes["icon-svg"]}>
                      <Facebook sx={{ fontSize: 30 }} />
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/toasteurvilleray/?hl=fr">
                  <a target="_blank" rel="noopener noreferrer">
                    <div className={classes["icon-svg"]}>
                      <Instagram sx={{ fontSize: 30 }} />
                    </div>{" "}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={classes["icon-svg"]}>
                      <Google sx={{ fontSize: 30 }} />
                    </div>{" "}
                  </a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        <hr className={classes.line}></hr>
      </footer>
      <div className={classes["copyright-box"]}>
        <p>
          Copyright © 2022 Le Toasteur | Fait avec&nbsp;
          <FontAwesomeIcon icon={faHeart} className={classes.heart} /> &nbsp;par
          Marving Moreton
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
