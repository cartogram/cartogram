import React from 'react';

import {title, description} from '~/content';

import {Layout} from '~/components/Layout';

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
        <Layout projects={data?.showcaseProjects ?? []}>{children}</Layout>
      </body>
    </html>
  );
}
