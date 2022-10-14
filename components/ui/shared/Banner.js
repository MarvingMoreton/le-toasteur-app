import classes from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Banner(props) {
  return (
    <div className={classes["banner-background"]}>
      <h1>Notre menu</h1>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </span>
    </div>
  );
}

export default Banner;
