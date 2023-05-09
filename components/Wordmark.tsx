import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {Letter} from './Letter';

const StyledWordmark = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const StyledLetter = styled.div<{
  layer: number;
  primaryColor: number[];
}>`
  position: absolute;
  font-size: 15vw;
  color: ${props =>
    props.primaryColor
      ? `rgba(${props.primaryColor})`
      : `var(--color-primary)`};
  z-index: ${props => props.layer};
  text-shadow: -1px -1px 0 var(--color-primary), 1px -1px 0 var(--color-primary),
    -1px 1px 0 var(--color-primary), 1px 1px 0 var(--color-primary);
`;

const StyledLetterGroup = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Wordmark({height, active = true}) {
  const letters = Array.from('CARTOGRAM').map((l, index) => (
    <Letter height={height} active={active} key={`${l}${index}`} letter={l} />
  ));

  return <StyledWordmark>{letters}</StyledWordmark>;
}
