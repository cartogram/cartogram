import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.main``;

export function Layout({children}: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}
