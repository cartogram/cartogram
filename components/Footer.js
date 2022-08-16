import styled from 'styled-components';
import {respond} from 'styles/utils';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media ${respond.xs} {
    width: 80%;
  }

  @media ${respond.sm} {
    width: 40%;
  }
`;
