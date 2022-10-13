import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className={classes["footer"]}>
        <div className={classes["footer-col--1"]}></div>
        <div className={classes["footer-col--2"]}></div>
        <div className={classes["footer-col--3"]}></div>
        <div className={classes["footer-col--5"]}></div>
        <div className={classes["footer-col--5"]}></div>
      </footer>
    </React.Fragment>
  );
}
