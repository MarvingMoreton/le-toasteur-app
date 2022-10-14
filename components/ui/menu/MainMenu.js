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
            <h2>Menu de septembre-octobre</h2>
            <span>
              PLATS SERVIS AVEC RISSOLÉES & SALADE MATINALE *exception des
              poutines et des salades NOS PAINS PROVIENNENT DE LA BOULANGERIE
              ‘LE PAIN DANS LES VOILES’
            </span>
          </div>
          <div className={classes["right-side"]}>
            <Image
              src="/images/toasteur-illustration.png"
              alt="test"
              // layout="fill"
              width={269}
              height={168}
            />
          </div>
        </div>
        <div className={classes["menu-list"]}>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
          {/* ITEM */}
          <div className={classes["item-card"]}>
            <div className={classes["title-row"]}>
              <h3>Poutine Déjeuner</h3>
              <span>16</span>
            </div>
            <p>
              2 œufs pochés, rissolées, mozzarella, légumes, hollandaise (ou
              pesto tomates séchées) Rég : bacon, saucisse Végé : tofu, courge
              butternut * remplacer par sauce macncheese +2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
