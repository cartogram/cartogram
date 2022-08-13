import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    emSizes: string[];
    remSizes: string[];
    fontFamilySans: {
      name: string;
      weight: number;
    };
    siteBackground: string;
    primaryColor: string;
    emBase: number;
    breakpoints: Breakpoint;
  }
}

interface Breakpoint {
  [key: string]: string;
}
