import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {respond} from 'styles/utils';

interface SectionProps {
  children?: ReactNode;
  vertical?: boolean;
  small?: boolean;
}

export const Section = styled.section<SectionProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${({vertical}) => (vertical ? 'column' : 'row')};
  margin: ${props => `${props.theme.emSizes[6]} ${props.theme.emSizes[6]}`};

  @media ${respond.xs} {
    margin: ${props => `0 ${props.theme.emSizes[8]} ${props.theme.emSizes[8]}`};

    &:first-of-type {
      margin-top: ${props => props.theme.emSizes[10]};
    }
  }

  @media ${respond.md} {
    margin: ${props =>
      `0 ${props.theme.emSizes[10]} ${props.theme.emSizes[10]}`};

    &:first-of-type {
      margin-top: ${props => props.theme.emSizes[10]};
    }
  }

  &:first-of-type {
    flex: 1;
  }

  ${props =>
    props.small &&
    `
      @media ${respond.xs} {
        width: 80%;
      }

      @media ${respond.sm} {
        width: 40%;
      }
    `}
`;
