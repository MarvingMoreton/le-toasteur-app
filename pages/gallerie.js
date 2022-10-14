import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import GalleryList from "../components/ui/Gallery/GalleryList";

export default function Gallerie() {
  return (
    <div>
      <Banner />
      <GalleryList />
    </div>
  );
}
