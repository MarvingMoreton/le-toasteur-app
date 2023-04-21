import MainNavigation from './MainNavigation';
import Footer from './Footer';
import classes from './Layout.module.css';
import React from 'react';
function Layout({ children, alternateLanguages, menu }) {
  return (
    <React.Fragment>
      <MainNavigation alternateLanguages={alternateLanguages} />
      <main className={classes.main}>{children}</main>
      <Footer alternateLanguages={alternateLanguages} />
    </React.Fragment>
  );
}

export default Layout;
