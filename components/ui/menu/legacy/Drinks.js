import classes from "./Drinks.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoBlue from "../../../public/images/logos/logo-toasteur-villeray-navy.png";
import toastOrange from "../../../public/images/logos/illustration-house-orange.png";

function MainMenu(props) {
  return (
    <section className={classes["section-drinks-menu"]}>
      <div className={`${classes["menu-grid"]} ${"container"}`}>
        <div className={classes["box-text"]}>
          <div className={classes["left-side"]}>
            <h2>Boissons</h2>
          </div>
          <div className={classes["right-side-illustration"]}>
            <Image
              src={toastOrange}
              alt="test"
              // layout="fill"
              // width={269}
              // height={168}
            />
          </div>
        </div>
        <div className={classes["menu-list"]}>
          <div className={classes["left-grid"]}>
            {/* First box */}
            <div className={classes["upper-box"]}>
              {/* item */}
              <span>Simple | Double</span>
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
            </div>

            <div className={classes["bottom-box"]}>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes["item-card"]}>
                <div className={classes["title-row"]}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["right-grid"]}>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes["item-card"]}>
              <div className={classes["title-row-right"]}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
          </div>
          <div className={classes["sentence"]}>
            <span>
              * tous nos cafés sont servis avec choix de lait de vache ou lait
              d’avoine
            </span>
          </div>
        </div>
      </div>

      <div className={classes["logo-box"]}>
        <Image
          className={classes["logo-blue-transparent"]}
          src={logoBlue}
          alt="test"
          // layout="fill"
          // width={207}
          // height={106}
        />
      </div>
    </section>
  );
}

export default MainMenu;
