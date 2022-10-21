import React, { useState, useRef, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import blueLogo from "../../public/images/logos/logo-toasteur-villeray-navy.png";
import blueToast from "../../public/images/logos/toast-blue-navy-ellipsed.svg";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    let header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={`${classes["navbar"]} ${sticky.isSticky ? " sticky" : ""}`}
        ref={headerRef}
        id="sticky-header"
      >
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
      </div>
    </React.Fragment>
  );
}

export default MainNavigation;
