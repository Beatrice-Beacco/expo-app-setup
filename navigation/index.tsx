import Navigation from "./Navigation";

import React from "react";
import { ColorSchemeName } from "react-native";

type PropTypes = {
  colorScheme: ColorSchemeName;
};

const index = ({ colorScheme }: PropTypes) => {
  return <Navigation colorScheme={colorScheme} />;
};

export default index;
