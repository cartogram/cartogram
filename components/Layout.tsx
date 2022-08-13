import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {respond} from 'styles/utils';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.main`
  overflow: hidden;
  display: block;
  position: relative;
  min-height: 100vh;
  padding: ${props => `${props.theme.emSizes[6]}`};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media ${respond.md} {
    padding: ${props => `${props.theme.emSizes[10]}`};
    padding-bottom: ${props => `${props.theme.emSizes[8]}`};
  }
`;

export function Layout({children}: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}
