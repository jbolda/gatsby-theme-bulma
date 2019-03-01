import React from "react";
import SimpleNav from "gatsby-theme-bulma-layout/src/Simple/SimpleNav";
import HeroLanding from "./HeroLanding";
import HeroAbout from "./HeroAbout";

const HeroLayout = props => (
  <SimpleNav location={props.location}>
    <HeroLanding swatch='primary' />
    <HeroAbout swatch='secondary' />
    {props.children}
  </SimpleNav>
);

export default HeroLayout;
