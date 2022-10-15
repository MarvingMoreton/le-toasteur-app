import classes from "./MainMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function MainMenu(props) {
  return (
    <section className={classes["section-main-menu"]}>
      <div className={`${classes["menu-grid"]} ${"container"}`}>
        <div className={classes["box-text"]}>
          <div className={classes["left-side"]}>
            <h2>Options véganes</h2>
            <span>
              PLATS SERVIS AVEC RISSOLÉES & SALADE MATINALE *exception des
              poutines et des salades NOS PAINS PROVIENNENT DE LA BOULANGERIE
              ‘LE PAIN DANS LES VOILES’
            </span>
          </div>
          <div className={classes["right-side"]}>
            <Image
              src="/images/toast-pop-orange.png"
              alt="test"
              // layout="fill"
              width={356}
              height={241}
            />
          </div>
        </div>
        <div className={classes["menu-list"]}>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine déjeuner végane</h3>
              <span>16.5</span>
            </div>
            <p>
              Rissolées, légumes, fauxmage style mozzarela, tofu, courgette,
              pesto basilic + extra saucisse Gusta paprika +2
            </p>
          </div>
        </div>
      </div>
      <div className={classes["logo-box"]}>
        <Image
          className={classes["logo-blue-transparent"]}
          src="/images/toasteur-villeray-logo.png"
          alt="test"
          // layout="fill"
          width={207}
          height={106}
        />
      </div>
    </section>
  );
}

export default MainMenu;
