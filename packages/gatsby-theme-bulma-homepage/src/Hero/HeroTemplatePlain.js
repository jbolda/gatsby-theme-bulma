import React from "react";
import HeroLayout from "./components/HeroLayout.js";

const HeroTemplate = props => (
  <HeroLayout {...props}>{props.children}</HeroLayout>
);

export default HeroTemplate;
