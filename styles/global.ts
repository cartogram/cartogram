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
    --space-05rem: 0.5em;
    font-family: ${theme.fontFamilySans.name}, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: ${theme.fontFamilySans.weight};
    font-size: var(--ft-size-body);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.primaryColor};
  }

  *,
  *:before,
  *:after {
    ${reset}
  }

  body {
    background: ${theme.siteBackground};
  }

  .dash {
    position: relative;
    display: inline-block;
    text-indent: -9999px;
    min-width: 2em;
    max-width: 12em;
    flex: 1;
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-top: 1px solid var(--color-primary);
    }
  }

  a {
    color: ${theme.primaryColor};

    &:hover {
      text-decoration: none;
    }
  }

  .color--primary {
    color: var(--color-primary);
  }

`;

export default GlobalStyle;
