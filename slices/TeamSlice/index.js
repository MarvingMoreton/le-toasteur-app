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

        {slice?.items?.map((item, i) => (
          <React.Fragment key={i}>
            <div className={classes["employee-card"]}>
              <div className={classes["image-box"]}>
                <PrismicNextImage field={item.photo} alt={item.photo.alt} />
              </div>

              <div className={classes["employee-text-box"]}>
                <PrismicRichText field={item.names} />
                <span className={classes.position}>{item.position_title}</span>
                <PrismicRichText field={item.description} />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSlice;
