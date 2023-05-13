import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Head} from './Head';
import {Footer} from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.siteBackground};
  border-top: 1px solid;
`;

export function Layout({children}: LayoutProps) {
  return (
    <>
      <Head />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
