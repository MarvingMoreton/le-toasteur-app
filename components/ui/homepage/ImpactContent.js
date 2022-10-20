import classes from "./ImpactContent.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function ImpactContent() {
  return (
    <section className={classes["section-impact-content"]}>
      <div className="container">
        <div className={classes["box-content"]}>
          <h2 className={classes["title-impact"]}>
            Notre nourriture est faite à{" "}
            <span className={classes["title-impact-highlighted"]}>
              100% avec amour!
            </span>
          </h2>
          <span className={classes["small-text"]}>
            Toutes nos préparations sont faite à partir de produits frais en
            travaillant avec des producteurs locaux au maximum.
          </span>
        </div>
      </div>
    </section>
  );
}

export default ImpactContent;
