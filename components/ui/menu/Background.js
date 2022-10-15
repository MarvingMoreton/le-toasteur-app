import classes from "./Background.module.css";

function Background(props) {
  return <div className={classes["background-color"]}>{props.children}</div>;
}

export default Background;
