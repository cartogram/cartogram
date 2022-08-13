import {theme, GlobalStyle} from '../styles';
import {ThemeProvider} from 'styled-components';

function Cartogram({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Cartogram;
