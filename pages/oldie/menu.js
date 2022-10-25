import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/ui/shared/Banner";
import MainMenu from "../components/ui/menu/MainMenu";
import Background from "../components/ui/menu/Background";

import VeganMenu from "../components/ui/menu/VeganMenu";
import Drinks from "../components/ui/menu/Drinks";
import Announcement from "../components/ui/shared/Announcement";

export default function Menu(props) {
  return (
    <div>
      <Banner h1={"Notre Menu"} text={"Pour l’amour du brunch !"} />
      <Background>
        <MainMenu />
        <Announcement />
        <VeganMenu />
        <Drinks />
      </Background>
    </div>
  );
}
