import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function MainNavigation() {
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
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={classes["x"]}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={classes["x"]}>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={classes["x"]}>Photos</a>
              </Link>
            </li>
            <li>
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
              <Link href="/">
                <a className={classes["x"]}>Notre Histoire</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr className={classes.line}></hr>
    </React.Fragment>
  );
}

export default MainNavigation;
