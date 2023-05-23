import React, {useState, useEffect} from 'react';
import {useTrail, animated} from '@react-spring/web';
import {randomNumber} from '~/utils';
import {useInterval} from '~/hooks';

import styles from './Letter.module.css';

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
    <span className={styles.Group}>
      {trail.map((props, index) => {
        return (
          <span
            className={styles.Letter}
            key={index}
            style={{
              zIndex: index === 0 ? trail.length : trail.length - index,
              color: index === 0 ? undefined : 'rgba(255, 255, 255, 1)',
            }}
          >
            <animated.div style={props}>{letter}</animated.div>
          </span>
        );
      })}
    </span>
  );
}
