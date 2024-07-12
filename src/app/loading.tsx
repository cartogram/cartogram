'use client'

import React from 'react'

import {Header} from '~/components/Header'
import {Section} from '~/components/Section'
import {Bar} from '~/components/Bar'

export default function Loading() {
  return (
    <>
      <Header title="Loading..." busy />
      <Bar />
      <Section fill />
    </>
  )
}
