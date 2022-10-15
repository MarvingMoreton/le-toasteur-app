import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import blueLogo from "../../public/images/logos/logo-toasteur-villeray-navy.png";
import blueToast from "../../public/images/logos/toast-blue-navy-ellipsed.svg";

import React from "react";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <React.Fragment>
      <header>
        <div className={classes["nav-logo"]}>
          <Link href="/">
            <a>
              <Image
                src={blueLogo}
                alt="test"
                layout="responsive"
                // width={133}
                // height={68}
              />
            </a>
          </Link>
        </div>
        <div className={classes["nav-container"]}>
          <nav className={classes["main-nav"]}>
            <ul className={classes["main-nav-list"]}>
              <li>
                <Link href="/">
                  <a
                    className={`${classes["main-nav-link"]} ${
                      currentRoute === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a
                    className={`${classes["main-nav-link"]} ${
                      currentRoute === "/" ? "active" : ""
                    }`}
                  >
                    Menu
                  </a>
                </Link>
              </li>
              <li className={classes["image-toast"]}>
                <Link href="/">
                  <a>
                    <Image
                      src={blueToast}
                      alt="test"
                      // layout="responsive"
                      // width={124}
                      // height={124}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallerie">
                  <a
                    className={`${classes["main-nav-link"]} ${
                      currentRoute === "/" ? "active" : ""
                    }`}
                  >
                    Photos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/notre-histoire">
                  <a
                    className={`${classes["main-nav-link"]} ${
                      currentRoute === "/" ? "active" : ""
                    }`}
                  >
                    Notre Histoire
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr className={classes.line}></hr>
    </React.Fragment>
  );
}

export default MainNavigation;
