import React from "react";
import SimpleNav from "gatsby-theme-bulma-layout/src/Simple/SimpleNav";
import HeroLanding from "gatsby-theme-bulma-homepage/src/Hero/components/HeroLanding";
import HeroAbout from "gatsby-theme-bulma-homepage/src/Hero/components//HeroAbout";

const HeroLayout = props => (
  <SimpleNav location={props.location}>
    <HeroLanding />
    <HeroAbout />
    {props.children}
    <section className="section is-fourthary edge--top">
      <h1 className="title">Recipess</h1>
      <h2 className="subtitle">
        We enjoy cooking. These are a few of our favorites eaten recently.
      </h2>
      <hr />
      <div className="columns is-multiline">[Insert list of recipes here]</div>
    </section>
  </SimpleNav>
);

export default HeroLayout;
