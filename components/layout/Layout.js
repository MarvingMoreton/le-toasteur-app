import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default layout;
