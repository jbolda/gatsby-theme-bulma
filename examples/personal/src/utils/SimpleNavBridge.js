import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SimpleNav from "gatsby-theme-bulma-layout/src/components/Simple/SimpleNav";

const SimpleNavBridge = props => (
  <SimpleNav {...props}>{props.children}</SimpleNav>
);

export default SimpleNavBridge
