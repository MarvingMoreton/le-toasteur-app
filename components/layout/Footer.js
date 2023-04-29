import classes from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import blueTransparentLogo from '../../public/images/logos/logo-toasteur-villeray-navy-transparent.png';
import facebook from '../../public/images/socials/square-facebook.svg';
import instagram from '../../public/images/socials/square-instagram.svg';

import { Facebook, Instagram, Google } from '@mui/icons-material';

import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { resolveLocaleFromNext } from '../../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../../lib/withAlternateLanguageURLs';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/router';
import { PrismicLink, PrismicText } from '@prismicio/react';

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${code === 'fr' ? 'fr' : 'us'}`} />;
};

function Footer({ alternateLanguages = [], ...props }) {
  const { req } = props;
  const currentLocale = resolveLocaleFromNext(req);

  // console.log(alternateLanguages);
  // console.log(alternateLanguages[0].lang);
  const router = useRouter();
  const currentRoute = router.pathname;

  // const languageAnchor =
  //   alternateLanguages.lang === 'fr-fr' ? 'English' : 'French';

  // const languageRoot =
  //   alternateLanguages.lang === 'en-ca'
  //     ? 'https://letoasteur.com/'
  //     : 'https://letoasteur.com/en-ca/';
  // alternateLanguages;
  return (
    <React.Fragment>
      <footer className={classes['footer']}>
        <div className={`${classes['footer-grid']} ${'container'}`}>
          <div className={classes['footer-col--1']}>
            <div className={classes['image-logo-navy']}>
              <Image
                src={blueTransparentLogo}
                alt="test"
                layout="responsive"
                // width={94}
                // height={48}
              />
            </div>
            <span>Toujours en mode brunch</span>
          </div>
          <div className={classes['footer-col--2']}>
            <div className={classes['col-2--address']}>
              <span className={classes.subtitle}>Le Toasteur Villeray</span>
              <p>767 Rue Villeray, Montréal, QC H2R 1J2</p>
              <span>(514) 759-6377</span>
            </div>
            <div className={classes['col-2--openings']}>
              <span className={classes.subtitle}>Heures d’ouverture:</span>

              <p>Lundi | 8H00 - 15H00</p>
              <p>Mardi | FERMÉ</p>
              <p>Mercredi | 8H00 - 15H00</p>
              <p>Jeudi | 8H00 - 15H00</p>
              <p>Vendredi | 8H00 - 15H00</p>
              <p>Samedi | 8H00 - 15H00</p>
              <p>Dimanche | 8H00 - 15H00</p>
            </div>
          </div>
          <div className={classes['footer-col--3']}>
            <iframe
              className={classes['map']}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3112351467425!2d-73.62349344916144!3d45.54406423602973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9193d3612eac7%3A0x574f4f87d020617!2sLe%20Toasteur%20Villeray!5e0!3m2!1sfr!2sca!4v1666017198638!5m2!1sfr!2sca"
              // width="480"
              // height="320"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={classes['footer-col--4']}>
            <div>
              <span className={classes.subtitle}>Pages</span>
              <ul className={classes['col-4-nav-list']}>
                {/* { {alternateLanguages[0].lang} == "en-ca"} && ()} */}
                <li>
                  <Link
                    href={
                      alternateLanguages[0].lang == 'fr-fr'
                        ? '/en-ca/menu'
                        : '/menu'
                    }
                  >
                    <a>Menu</a>
                  </Link>
                  {/* alternateLanguages[0].lang == "en-ca" ? "/" : /menu*/}
                </li>
                <li>
                  <Link
                    href={
                      alternateLanguages[0].lang == 'fr-fr'
                        ? '/en-ca/our-history'
                        : '/notre-histoire'
                    }
                  >
                    <a>
                      {alternateLanguages[0].lang == 'fr-fr'
                        ? 'Our Story'
                        : 'Notre Histoire'}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      alternateLanguages[0].lang == 'fr-fr'
                        ? '/en-ca/gallery'
                        : '/galerie'
                    }
                  >
                    <a>Photos</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      alternateLanguages[0].lang == 'fr-fr'
                        ? '/en-ca/contact'
                        : '/contact'
                    }
                  >
                    <a>Contact</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href={languageRoot + alternateLanguages[0].url}>
                    <a>{languageAnchor}</a>
                  </Link>
                </li> */}
                {/* {alternateLanguages.map((lang) => (
                  <li key={lang.lang}>
                    <PrismicLink
                      href={lang.url}
                      locale={`${lang.lang === 'en-ca' ? 'en-ca' : lang.lang}`}
                    >
                      <span className="sr-only">
                        {`${lang.lang === 'en-ca' ? 'en-ca' : 'fr-fr'}`}
                      </span>
                      <FlagIcon lang={lang.lang} />
                    </PrismicLink>
                  </li>
                ))} */}

                {/* CHAPGPT VERSION */}

                {alternateLanguages.map((lang) => (
                  <li key={lang.lang}>
                    <Link
                      href={lang.url}
                      locale={`${lang.lang === 'en-ca' ? 'en-CA' : 'fr'}`}
                    >
                      <a>
                        <span className="sr-only">
                          {`${lang.lang === 'en-ca' ? 'en-CA' : 'fr'}`}
                        </span>
                        <FlagIcon lang={lang.lang} />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes['footer-col--5']}>
              <span className={classes.subtitle}>Notre communauté</span>
              <ul className={classes['col-5-nav-list']}>
                <li>
                  <Link href="https://fr-ca.facebook.com/LeToasteurVilleray/">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className={classes['icon-svg']}>
                        <Facebook sx={{ fontSize: 30 }} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/toasteurvilleray/?hl=fr">
                    <a target="_blank" rel="noopener noreferrer">
                      <div className={classes['icon-svg']}>
                        <Instagram sx={{ fontSize: 30 }} />
                      </div>{' '}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className={classes['icon-svg']}>
                        <Google sx={{ fontSize: 30 }} />
                      </div>{' '}
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
      <div className={classes['copyright-box']}>
        <p>
          Copyright © 2022 Le Toasteur | Fait avec&nbsp;
          <FontAwesomeIcon icon={faHeart} className={classes.heart} /> par&nbsp;
          <Link href="https://marvingmoreton.com/">
            <a className="marving" target="_blank" rel="noopener noreferrer">
              Marving Moreton
            </a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
