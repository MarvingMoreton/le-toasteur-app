import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import GalleryList from "../components/ui/Gallery/GalleryList";

export default function Gallerie() {
  return (
    <div>
      <Banner
        h1={"Chez Nous"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
      />
      <GalleryList />
    </div>
  );
}
