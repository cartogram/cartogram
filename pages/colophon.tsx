import React, {useState} from 'react';

import {threeLiner, colophon, name} from '~/content';

import {
  Layout,
  Head,
  A,
  Text,
  Content,
  Footer,
  Section,
  Large,
  Small,
} from '~/components';
import {useWindowSize} from '~/hooks';
const COLORS = [
  [147, 56, 42, 1],
  [72, 184, 204, 1],
  [72, 203, 164, 1],
  [243, 89, 255, 1],
  [151, 169, 147, 1],
  [9, 38, 3, 1],
  [0, 68, 82, 1],
];
import {randomNumber} from '~/utils';

export default function Colophon() {
  const size = useWindowSize();

  return (
    <Layout height={size.height}>
      <Section vertical small>
        <Text pad>
          Coded with curiosity using VS Code on a MacBook Air. Uses Lausanne
          typeface with permission from{' '}
          <A external href="https://www.nizarkazan.ch/">
            Nizar Kazan
          </A>
          . Written in TypeScript using a small stack of React-oriented,
          open-source tools and libraries.
        </Text>
        <Text>
          You can view the{' '}
          <A external href="">
            full source code
          </A>{' '}
          on GitHub.
        </Text>
      </Section>
    </Layout>
  );
}
