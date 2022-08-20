import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Head} from './Head';
import {Footer} from './Footer';

interface LayoutProps {
  children: ReactNode;
  height: number;
}

const StyledLayout = styled.main<LayoutProps>`
  overflow: hidden;
  width: 100%;
  height: ${props => `${props.height}px`};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export function Layout({children, height}: LayoutProps) {
  return (
    <>
      <Head />
      <StyledLayout height={height}>
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
}
