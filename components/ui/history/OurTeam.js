import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./OurTeam.module.css";
import portrait from "../../../public/images/illustrations/dummy-team-portrait.jpg";

function OurTeam(props) {
  return (
    <section className={`${classes["section-team"]} ${"container"}`}>
      <div className={classes["grid-team"]}>
        <div className={classes["box-text"]}>
          <span className={classes.subtitle}>La Dream Team</span>
          <h2>Notre équipe</h2>
        </div>
        <div className={classes["team-item-list"]}>
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 2 */}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 3 */}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 4 */}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 5 */}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 6*/}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 7*/}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 8*/}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 9*/}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
          {/* EMPLOYEE CARD 10*/}
          <div className={classes["employee-card"]}>
            <div className={classes["image-box"]}>
              <Image
                src={portrait}
                alt="test"
                // layout="responsive"
                // width={399}
                // height={470}
              />
            </div>
            <div className={classes["employee-text-box"]}>
              <h4>John Doe</h4>
              <span className={classes.position}>Serveuse</span>
              <p>
                Après avoir travaillé plusieurs années dans différentes
                boucheries, Félix est maintenant bien en selle chez PLB depuis
                plusieurs années.
              </p>
              <p>
                Étant un artiste dans l’âme et soucieux du détail, il est
                souvent derrière plusieurs confections raffinées que vous
                trouverez dans notre vitrine au fil des saisons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
