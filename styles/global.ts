import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset} from './utils';

const GlobalStyle = createGlobalStyle`
  :root {
    --ft-screen-width: 1440;
    --ft-body-min: 1rem; /* Going this small for demo purposes */
    --ft-body-max: 5rem;
    --ft-body-vw: calc(var(--ft-body) / var(--ft-screen-width) * 100vw);

    --ft-body: 22;
    --ft-size-body: clamp(var(--ft-body-min), var(--ft-body-vw), var(--ft-body-max));
    
    --ft-size-small: 13px;
    
    --ft-size-medium: var(--ft-size-body);

    --ft-large: 30;
    --ft-size-large: clamp(var(--ft-body-min) * (var(--ft-large) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-large) / var(--ft-body)), var(--ft-body-max) * (var(--ft-large) / var(--ft-body)));
  }

  html,
  body,
  #__next ,
  body > div {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    --space-1rem: 1em;
    --space-05rem: 0.6em;
    font-family: ${theme.fontFamilySans.name};
    font-weight: ${theme.fontFamilySans.weight};
    font-size: var(--ft-size-body);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  *,
  *:before,
  *:after {
    ${reset}
  }

  @font-face {
    font-family: 'lausanna';
    src: url('/fonts/Lausanne-300.otf');
 
  }

  body {
    background: ${theme.siteBackground};
  }




`;

export default GlobalStyle;
