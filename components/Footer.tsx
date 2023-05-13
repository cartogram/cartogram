import React from 'react';

import {Small} from './Text';
import {A} from './A';
import {Section} from './Section';

import styled from 'styled-components';
import {respond} from 'styles/utils';

export const StyledFooter = styled.footer`
  width: 100%;
  display: block;
  position: relative;
  // background: ${props => props.theme.siteBackground};

  padding: ${props => `${props.theme.emSizes[6]} ${props.theme.emSizes[6]}`};

  @media ${respond.xs} {
    padding: ${props =>
      `0 ${props.theme.emSizes[8]} ${props.theme.emSizes[8]}`};

    &:first-of-type {
      padding-top: ${props => props.theme.emSizes[10]};
    }
  }

  @media ${respond.md} {
    padding: ${props =>
      `0 ${props.theme.emSizes[10]} ${props.theme.emSizes[10]}`};

    &:first-of-type {
      padding-top: ${props => props.theme.emSizes[10]};
    }
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <Section small>
        <Small>
          © {new Date().getFullYear()}
          <span className="color--primary">―</span>
          <A href="/">Cartogram Inc.</A>
          <span className="dash">―</span> All Rights Reserved.
          <span className="color--primary">―</span>
          <A href="/colophon">Colophon</A>
        </Small>
      </Section>
    </StyledFooter>
  );
}
