import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import ImageFeatured from "../components/ui/history/ImageFeatured";

export default function OurStory(props) {
  return (
    <div>
      <Banner />
      <ImageFeatured />
    </div>
  );
}
