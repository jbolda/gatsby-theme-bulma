import React from "react";
import { StaticQuery, graphql } from "gatsby";
import HeroLayout from "gatsby-theme-bulma-homepage/src/components/Hero/HeroLayout";

const HeroLayoutBridge = props => (
  <HeroLayout {...props}>{props.children}</HeroLayout>
);

export default HeroLayoutBridge
