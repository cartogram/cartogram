import React from 'react'

import {title, description} from '~/content'

import {Layout} from '~/components/Layout'
import {Analytics} from '@vercel/analytics/react'

import './globals.css'

export const metadata = {
  title,
  description,
}

export default async function RootLayout({children}) {
  return (
    <>
      <Layout projects={[]}>{children}</Layout>
      <Analytics />
    </>
  )
}
