import classes from "./Background.module.css";

function Background(props) {
  return <div className={classes["background-color"]}>{props.childre}</div>;
}

export default Background;
