import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/ui/homepage/Hero";
import ImageFeatured from "../components/ui/homepage/ImageFeatured";
import ImpactContent from "../components/ui/homepage/ImpactContent";
import BookTable from "../components/ui/homepage/BookTable";
import Testimonials from "../components/ui/homepage/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageFeatured />
      <ImpactContent />
      <BookTable />
      <Testimonials />
    </div>
  );
}
