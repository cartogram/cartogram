import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {useTrail, animated} from 'react-spring';

import {useInterval} from '~/hooks';

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
   1px 1px 0 rgba(${props.shadowcolor});`};
`;

const StyledLetterGroup = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Wordmark({height, color, active = true}) {
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
  const [vertical, setVertical] = useState(10);

  useEffect(() => {
    setVertical(randomNumber(0, height, 0.5));
  }, [setVertical, height]);
  useInterval(
    () => {
      setVertical(randomNumber(0, height, 0.5));
    },
    active && height ? 1500 : null,
  );

  // console.log(`vertical ${vertical}`);
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
    <StyledLetterGroup>
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

        // console.log(props.translateY.get());
        return (
          <StyledLetter
            as={animated.div}
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
    </StyledLetterGroup>
  );
}

function randomNumber(min, max, correction = 0) {
  return Math.floor((Math.random() - correction) * (max - min + 1)) + min;
}
