import React from 'react'
import {allPosts, Post} from 'contentlayer/generated'

import {title, description} from '~/content'

import {Layout} from '~/components/Layout'
import {Analytics} from '@vercel/analytics/react'

import './globals.css'

export const metadata = {
  title,
  description,
}

export default async function RootLayout({children}) {
  const posts = allPosts
  return (
    <>
      <Layout projects={posts}>{children}</Layout>
      <Analytics />
    </>
  )
}
