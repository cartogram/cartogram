import {theme, GlobalStyle} from '../styles';
import {ThemeProvider} from 'styled-components';
import '../styles/font.css';

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
