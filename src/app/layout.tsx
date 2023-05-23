import React from 'react';

import {professionalLinks, name, title, description} from '~/content';

import {Layout} from '~/components/Layout';
import {Section} from '~/components/Section';
import {Text} from '~/components/Text';
import {Footer} from '~/components/Footer';
import {List} from '~/components/List';
import {Projects} from '~/components/Projects';
import {Header} from '~/components/Header';
import {A} from '~/components/A';

import {getHomePage} from 'lib/sanity.client';

import './globals.css';

export const metadata = {
  title,
  description,
};

export default async function RootLayout({activeProject, children, ...rest}) {
  const data = await getHomePage({token: null});

  return (
    <html lang="en">
      <body>
        <Layout>
          <Header>
            <Section pad>
              <Text>
                <A href="/">{name}</A>
              </Text>
            </Section>
          </Header>
          {children}

          <Section pad small></Section>
          <Footer />

          <Projects projects={data?.showcaseProjects ?? []}>
            {children}
          </Projects>
        </Layout>
      </body>
    </html>
  );
}
