import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {useTrail, animated} from 'react-spring';

import {useInterval} from '~/hooks';

const COLORS = [
  [147, 56, 42, 1],
  [72, 184, 204, 1],
  [72, 203, 164, 1],
  [243, 89, 255, 1],
  [151, 169, 147, 1],
  [9, 38, 3, 1],
  [0, 68, 82, 1],
];

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

const StyledLetter = styled(animated.div)<{
  layer: number;
  shadowcolor: number[];
  color: number[];
}>`
  position: absolute;
  font-size: 15vw;
  color: ${props => `rgba(${props.color})`};
  z-index: ${props => props.layer};
  text-shadow: ${props => `-1px -1px 0 rgba(${props.shadowcolor}),
  1px -1px 0 rgba(${props.shadowcolor}),
  -1px 1px 0 rgba(${props.shadowcolor}),
   1px 1px 0 rgba(${props.shadowcolor})`};
`;

const StyledWord = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Wordmark({height, active = true}) {
  const color = COLORS[randomNumber(0, COLORS.length - 1)];

  const letters = Array.from('CARTOGRAM').map((l, index) => (
    <Letter
      height={height}
      active={active}
      color={color}
      key={`${l}${index}`}
      letter={l}
    />
  ));

  return <StyledWordmark>{letters}</StyledWordmark>;
}

function Letter({letter, height, color, active}) {
  const max = height;
  const [vertical, setVertical] = useState(randomNumber(0, max, 0.5));

  useInterval(
    () => {
      setVertical(randomNumber(0, max, 0.5));
    },
    active && max ? 1500 : null,
  );

  const trail = useTrail(6, {
    config: {
      mass: 4,
      tension: 1000,
      friction: 200,
      precision: 0.001,
      velocity: 1,
    },
    translateY: 0,
    to: {translateY: active ? vertical : 0},
    delay: 0,
  });

  return (
    <StyledWord>
      {trail.map((props, index) => {
        const styleProps =
          index === 0
            ? {
                layer: trail.length,
                shadowColor: color,
                color,
              }
            : {
                color: [255, 255, 255, 1],
                shadowColor: color,
                layer: trail.length - index,
              };

        return (
          <StyledLetter
            key={index}
            style={props}
            layer={styleProps.layer}
            color={styleProps.color}
            shadowcolor={styleProps.shadowColor}
          >
            {letter}
          </StyledLetter>
        );
      })}
    </StyledWord>
  );
}

function randomNumber(min, max, correction = 0) {
  return Math.floor((Math.random() - correction) * (max - min + 1)) + min;
}
