import classes from "./BookTable.module.css";
import Link from "next/link";
import Image from "next/image";
import table from "../../../public/images/restaurant/table-toasteur.png";

import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BookTable() {
  return (
    <section className={classes["section-book-table"]}>
      <div className={`${classes["container-local"]} ${"container"}`}>
        <div className={classes["box-left"]}>
          <div className={classes["box-left--text"]}>
            <h3 className={classes["left-title"]}>Réserver une table </h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className={classes["box-right"]}>
          <span>🗓️</span>
          <h2>Pourquoi nous ne prenons pas de réservation</h2>
          <div className={classes["box-right-paragraphs"]}>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <Link href="/menu">
            <a className="btn-primary">Notre menu</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookTable;
