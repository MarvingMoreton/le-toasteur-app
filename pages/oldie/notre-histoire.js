import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import ImageFeatured from "../components/ui/history/ImageFeatured";
import Values from "../components/ui/history/Values";
import OurTeam from "../components/ui/history/OurTeam";

export default function OurStory(props) {
  return (
    <div>
      <Banner
        h1={"Notre Histoire"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
      />
      <ImageFeatured />
      <Values />

      <OurTeam />
    </div>
  );
}
