import styled from 'styled-components';
import {textStyles, mediumStyles, smallStyles} from './Text';
import {anchorStyles} from './A';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  p {
    ${textStyles}

    &:first-child {
      ${mediumStyles}
    }
  }

  small {
    ${smallStyles};
  }

  a {
    ${anchorStyles}
  }
`;
