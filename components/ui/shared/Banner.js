import classes from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Banner(props) {
  return (
    <div className={classes["banner-background"]}>
      <div className={classes["text-box"]}>
        <h1>{props.h1}</h1>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default Banner;
