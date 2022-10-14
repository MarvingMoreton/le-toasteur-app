import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import ImageFeatured from "../components/ui/history/ImageFeatured";
import Values from "../components/ui/history/Values";

export default function OurStory(props) {
  return (
    <div>
      <Banner />
      <ImageFeatured />
      <Values />
    </div>
  );
}
