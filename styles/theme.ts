import {DefaultTheme} from 'styled-components';

import {emBase, emCalc, remCalc, breakpoints} from './utils';

const baseSize = 8;

const halfSizes = Array.from(
  {length: 4},
  (_, index) => (index + 1) * (baseSize / 2),
);

const fullSizes = Array.from(
  {length: 20},
  (_, index) => (index + 1) * baseSize,
);

const sizes = [...halfSizes, ...fullSizes];
const emSizes = sizes.map(emCalc);
const remSizes = sizes.map(remCalc);

const theme: DefaultTheme = {
  siteBackground: `url(/noise.png) `,
  primaryColor: '#000',
  fontFamilySans: {
    name: 'lausanna',
    weight: 300,
  },
  emBase,
  emSizes,
  remSizes,
  breakpoints,
};

export default theme;
