import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import Map from "../components/ui/contact/Map";

export default function Contact(props) {
  return (
    <div>
      <Banner />
      <Map />
    </div>
  );
}
