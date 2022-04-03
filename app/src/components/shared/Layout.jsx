import React, { Fragment } from "react";
import Header from "./Header";
import RankFooter from "../UI/RankFooter";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <RankFooter />
    </Fragment>
  );
};

export default Layout;
