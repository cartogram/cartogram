import styled from 'styled-components';
import {respond} from 'styles/utils';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  @media ${respond.md} {
    width: 40%;
  }
`;
