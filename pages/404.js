import React from "react";
import Head from "next/head";
import classes from "../components/ui/error.module.css";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NotFoundPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Le Toasteur xx</title>
        <meta name="description" content="Meta description to be filled!" />
      </Head>

      <h1>TBD</h1>
    </React.Fragment>
  );
}

export default NotFoundPage;
