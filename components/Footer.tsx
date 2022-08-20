import React from 'react';

import {Small} from './Text';
import {A} from './A';
import {Section} from './Section';

import styled from 'styled-components';
import {respond} from 'styles/utils';

export const StyledFooter = styled.footer`
  bottom: ${props => `${props.theme.emSizes[6]}`};
  width: 100%;
  margin: ${props => `0 ${props.theme.emSizes[6]}`};

  @media ${respond.xs} {
    width: 80%;
    margin: ${props => `0 ${props.theme.emSizes[8]}`};
  }

  @media ${respond.sm} {
    width: 40%;
  }

  @media ${respond.md} {
    margin: ${props => `0 ${props.theme.emSizes[10]}`};
  }
`;

export function Footer() {
  return (
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
  );
}
