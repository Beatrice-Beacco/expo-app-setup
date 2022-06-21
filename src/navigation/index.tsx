import React from 'react';
import { ColorSchemeName } from 'react-native';
import Navigation from './Navigation';

type PropTypes = {
  colorScheme: ColorSchemeName;
};

const index = ({ colorScheme }: PropTypes) => (
  <Navigation colorScheme={colorScheme} />
);

export default index;
