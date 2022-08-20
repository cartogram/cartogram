import React from 'react';

import {Layout, Large, A, List, Text, Section} from '~/components';
import {stackLinks} from '~/content';
import {useWindowSize} from '~/hooks';

export default function Colophon() {
  const size = useWindowSize();

  return (
    <Layout height={size.height}>
      <Section vertical small>
        <Large>
          Built between runs around
          <br />
          <A
            external
            href="https://www.google.com/maps/place/Tempelhofer+Feld/@52.475391,13.401893,15z/data=!4m2!3m1!1s0x0:0x88898e99acbb718b?sa=X&ved=2ahUKEwizv7mTzdX5AhVyQ_EDHT4NDN0Q_BJ6BAhsEAU"
          >
            Templehofer Feld
          </A>{' '}
          in Berlin.
        </Large>
        <Text>Coded with curiosity using VS Code on a MacBook Air.</Text>
        <Text pad>
          Set in Lausanne type with permission from{' '}
          <A external href="https://www.nizarkazan.ch/">
            Nizar Kazan
          </A>
          .
        </Text>
        <Text pad>
          Written in{' '}
          <A external href="https://www.typescriptlang.org/">
            TypeScript
          </A>{' '}
          using a small stack of{' '}
          <A external href="https://reactjs.org/">
            React
          </A>
          -oriented, open-source packages including but not limited to:
        </Text>
        <List pad items={stackLinks} />
        <Text>
          You can view the{' '}
          <A external href="https://github.com/cartogram/cartogram">
            full source code
          </A>{' '}
          on GitHub.
        </Text>
      </Section>
    </Layout>
  );
}
