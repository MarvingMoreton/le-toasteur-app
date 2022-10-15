import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import MainMenu from "../components/ui/menu/MainMenu";
import VeganMenu from "../components/ui/menu/VeganMenu";

export default function Menu(props) {
  return (
    <div>
      <Banner />

      <MainMenu />
      <VeganMenu />
    </div>
  );
}
