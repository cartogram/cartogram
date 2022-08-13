import styled from 'styled-components';
import {textStyles, largeStyles, smallStyles} from './Text';
import {anchorStyles} from './A';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  p {
    ${textStyles}

    &:first-child {
      ${largeStyles}
    }
  }

  small {
    ${smallStyles};
  }

  strike {
    text-decoration: wavy line-through;
    text-decoration-color: black;
  }

  a {
    ${anchorStyles}
  }
`;
