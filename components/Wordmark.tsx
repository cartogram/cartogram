import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {Letter} from './Letter';
import {useWindowSize} from '~/hooks';

const StyledWordmark = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export function Wordmark({active = true}) {
  const size = useWindowSize();
  const letters = Array.from('CARTOGRAM').map((l, index) => (
    <Letter
      height={size.height}
      active={active}
      key={`${l}${index}`}
      letter={l}
    />
  ));

  return <StyledWordmark>{letters}</StyledWordmark>;
}
