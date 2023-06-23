import React from 'react';

import {stackLinks} from '~/content';
import {Layout} from '~/components/Layout';
import {Section} from '~/components/Section';
import {Text, Large} from '~/components/Text';
import {List} from '~/components/List';
import {A} from '~/components/A';

export default function Home() {
  return (
    <Section vertical small>
      <Large>
        Built between runs in{' '}
        <A
          external
          href="https://www.google.com/maps/place/Tempelhofer+Feld/@52.475391,13.401893,15z/data=!4m2!3m1!1s0x0:0x88898e99acbb718b?sa=X&ved=2ahUKEwizv7mTzdX5AhVyQ_EDHT4NDN0Q_BJ6BAhsEAU"
        >
          Templehofer Feld
        </A>
        .
      </Large>
      <Text pad>
        Coded with curiosity using VS Code on a MacBook Air. Set in Lausanne
        type with permission from{' '}
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
        -oriented, open-source packages, including but not limited to:
      </Text>
      <List pad items={stackLinks} />
      <Text>
        View the{' '}
        <A external href="https://github.com/cartogram/cartogram">
          full source code
        </A>{' '}
        on GitHub.
      </Text>
    </Section>
  );
}
