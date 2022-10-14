import classes from "./Addresses.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Addresses() {
  return (
    <section className={`${classes["section-addresses"]} ${"container"}`}>
      <div className={classes["grid-addresses"]}>
        <div className={classes["card-address"]}>
          <h2>Addresse</h2>
          <span>767 Rue Villeray, Montréal, QC H2R 1J2</span>
        </div>
        <div className={classes["card-address"]}>
          <h2>Téléphone</h2>
          <span>(514) 759-6377</span>
        </div>
        <div className={classes["card-address"]}>
          <h2>Horaires d’ouverture</h2>
          <span>
            Jeudi au Lundi | <strong>8H00 - 15H00</strong>{" "}
          </span>
        </div>
        <div className={classes["card-address"]}>
          <h2>Parking</h2>
          <span>
            There are many variations of passages of Lorem Ipsum available.
          </span>
        </div>
      </div>
      <div className={classes["box-illustration"]}>
        <Image
          src="/images/toasteur-illustration.png"
          alt="test"
          // layout="fill"
          width={269}
          height={167}
        />
      </div>
    </section>
  );
}

export default Addresses;
