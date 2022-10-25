import React from "react";
import { PrismicRichText } from "@prismicio/react";
import classes from "../../components/ui/history/OurTeam.module.css";
import { PrismicNextImage } from "@prismicio/next";
import CustomImageH from "../../components/PrismicComponents/CustomLink";

/**
 * @typedef {import("@prismicio/client").Content.TeamSliceSlice} TeamSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSliceSlice>} TeamSliceProps
 * @param { TeamSliceProps }
 */
const TeamSlice = ({ slice }) => (
  <section className={`${classes["section-team"]} ${"container"}`}>
    <div className={classes["grid-team"]}>
      <div className={classes["box-text"]}>
        <span className={classes.subtitle}>La Dream Team</span>
        <h2>Notre équipe</h2>
      </div>
      <div className={classes["team-item-list"]}>
        {/*

        */}
        {/* EMPLOYEE CARD TO BE ITERATIVE THROUGH PRISMIC */}
        <div className={classes["employee-card"]}>
          <div className={classes["image-box"]}>{/* IMAGE */}</div>
          <div className={classes["employee-text-box"]}>
            {/* <h4>John Doe</h4> */}
            {/* NAME */}

            <span className={classes.position}>Serveuse</span>
            {/* JOB TITLE */}

            {/* DESCRIPTION */}
            {/* <p>
              Après avoir travaillé plusieurs années dans différentes
              boucheries, Félix est maintenant bien en selle chez PLB depuis
              plusieurs années.
            </p>
            <p>
              Étant un artiste dans l’âme et soucieux du détail, il est souvent
              derrière plusieurs confections raffinées que vous trouverez dans
              notre vitrine au fil des saisons.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSlice;
