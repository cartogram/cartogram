import './globals.css';

export const metadata = {
  title,
  description,
};

import React from 'react';

import {
  threeLiner,
  professionalLinks,
  name,
  title,
  description,
} from '~/content';
import {Wordmark} from '~/components/Wordmark';
import {Layout} from '~/components/Layout';
import {Section} from '~/components/Section';
import {Text} from '~/components/Text';
import {Footer} from '~/components/Footer';
import {List} from '~/components/List';
import {Content} from '~/components/Content';
import {A} from '~/components/A';

export default async function RootLayout({activeProject, children, ...rest}) {
  console.log(rest);

  return (
    <html lang="en">
      <body>
        <Layout>
          <Wordmark />
          <Section pad>
            <Text pad>
              <A href="/">{name}</A>
            </Text>
            <Content>{threeLiner}</Content>
          </Section>
          <Section pad small>
            <List pad inline items={professionalLinks} />
          </Section>
          <Footer />
          {children}
        </Layout>
      </body>
    </html>
  );
}
