import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  height: number;
}

const StyledLayout = styled.main<LayoutProps>`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: ${props => `${props.height}px`};
`;

export function Layout({children, height}: LayoutProps) {
  return <StyledLayout height={height}>{children}</StyledLayout>;
}
