import React from 'react';

import {threeLiner, professionalLinks, name, copyright} from '~/content';

import {
  Layout,
  Head,
  A,
  Small,
  Text,
  Content,
  Footer,
  Wordmark,
  Section,
  List,
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

export default function Home() {
  const size = useWindowSize();
  const color = COLORS[randomNumber(0, COLORS.length - 1)];

  return (
    <>
      <style global jsx>{`
        :root {
          --color-primary: rgba(${color});
        }
      `}</style>
      <Head />
      <Layout height={size.height}>
        <Wordmark color={color} height={size.height} />
        <Section>
          <Text>
            <A>{name}</A>
          </Text>
          <Content dangerouslySetInnerHTML={{__html: threeLiner}} />
        </Section>
      </Layout>
      <Footer>
        <Section>
          <List inline items={professionalLinks} />
        </Section>
        <Section>
          <Small dangerouslySetInnerHTML={{__html: copyright}} />
        </Section>
      </Footer>
    </>
  );
}
