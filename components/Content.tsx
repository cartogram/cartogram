import styled from 'styled-components';
import {textStyles, largeStyles, smallStyles} from './Text';
import {anchorStyles} from './A';

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    ${textStyles}
    padding-bottom: ${props => props.theme.emSizes[2]};
    &:first-child {
      ${largeStyles}
      padding-bottom: 0;
    }
  }

  small {
    ${smallStyles};
  }

  strike {
    text-decoration: line-through;
    text-decoration-color: var(--color-primary);
  }

  a {
    ${anchorStyles}
  }
`;
