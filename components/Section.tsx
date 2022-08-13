import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {respond} from 'styles/utils';

interface SectionProps {
  children: ReactNode;
}

const StyledSection = styled.section`
  position: relative;
  margin: ${props => `${props.theme.emSizes[6]}`};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${respond.xs} {
    margin: ${props => `${props.theme.emSizes[8]}`};
  }

  @media ${respond.md} {
    margin: ${props => `${props.theme.emSizes[10]}`};
  }
`;

export function Section({children}: SectionProps) {
  return <StyledSection>{children}</StyledSection>;
}
