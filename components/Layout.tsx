import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.main`
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export function Layout({children}: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}
