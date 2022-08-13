import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset, respond} from './utils';

const GlobalStyle = createGlobalStyle`
  :root {
    --ft-screen-width: 1440;
    --ft-body-min: 0.9rem; /* Going this small for demo purposes */
    --ft-body-max: 4rem;
    --ft-body-vw: calc(var(--ft-body) / var(--ft-screen-width) * 100vw);

    --ft-body: 20;
    --ft-size-body: clamp(var(--ft-body-min), var(--ft-body-vw), var(--ft-body-max));
    
    --ft-heading: 40;
    --ft-size-heading: clamp(var(--ft-body-min) * (var(--ft-heading) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-heading) / var(--ft-body)), var(--ft-body-max) * (var(--ft-heading) / var(--ft-body)));

    --ft-small: 22;
    --ft-size-small: clamp(var(--ft-body-min) * (var(--ft-small) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-small) / var(--ft-body)), var(--ft-body-max) * (var(--ft-small) / var(--ft-body)));

    --ft-xsmall: 16;
    --ft-size-xsmall: clamp(var(--ft-body-min) * (var(--ft-xsmall) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-xsmall) / var(--ft-body)), var(--ft-body-max) * (var(--ft-xsmall) / var(--ft-body)));
    
    --ft-xxsmall: 13;
    --ft-size-xxsmall: clamp(var(--ft-body-min) * (var(--ft-xsmall) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-xxsmall) / var(--ft-body)), var(--ft-body-max) * (var(--ft-xxsmall) / var(--ft-body)));
    
    --ft-medium: 30;
    --ft-size-medium: clamp(var(--ft-body-min) * (var(--ft-medium) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-medium) / var(--ft-body)), var(--ft-body-max) * (var(--ft-medium) / var(--ft-body)));
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
