'use-client';

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useTrail, animated} from 'react-spring';
import {randomNumber} from '~/utils';
import {useInterval} from '~/hooks';

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

export function Letter({letter, height, active}) {
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
                color: undefined,
              }
            : {
                color: [255, 255, 255, 1],
                layer: trail.length - index,
              };

        // console.log(props.translateY.get());
        return (
          <StyledLetter
            key={index}
            layer={styleProps.layer}
            primaryColor={styleProps.color}
          >
            <animated.div style={props}>{letter}</animated.div>
          </StyledLetter>
        );
      })}
    </StyledLetterGroup>
  );
}
