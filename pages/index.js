import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/ui/homepage/Hero";
import ImageFeatured from "../components/ui/homepage/ImageFeatured";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageFeatured />
    </div>
  );
}
