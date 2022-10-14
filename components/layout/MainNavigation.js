import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <React.Fragment>
      <header>
        <Link href="/">
          <a>
            <Image
              src="/images/toasteur-villeray-logo.png"
              alt="test"
              // layout="fill"
              width={133}
              height={68}
            />
          </a>
        </Link>
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
                      src="/images/toast-blue-navy.png"
                      alt="test"
                      // layout="fill"
                      width={124}
                      height={124}
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
