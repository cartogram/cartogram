import React from 'react';

import {title, description} from '~/content';

import {Layout} from '~/components/Layout';
import {Analytics} from '@vercel/analytics/react';

import {getHomePage} from 'lib/sanity.client';

import './globals.css';

export const metadata = {
  title,
  description,
};

export default async function RootLayout({children}) {
  const data = await getHomePage({token: null});

  return (
    <>
      <Layout projects={data?.showcaseProjects ?? []}>{children}</Layout>
      <Analytics />
    </>
  );
}
