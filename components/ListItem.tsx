import React from 'react'

import {Text} from './Text'
import {A} from './A'

import styles from './ListItem.module.css'

interface Item {
  slug?: string
  title: string | React.ReactNode
  tags?: string[]
  date?: string
  icon?: string
  label?: string
  permalink?: string
  onGoing?: boolean
  active?: boolean
  onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onMouseOver?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

interface Props {
  item: Item
  active?: boolean
}

export function ListItem({item: {title, permalink, ...rest}}: Props) {
  const textMarkup = <Text>{title}</Text>

  const linkMarkup = permalink ? (
    <A external href={permalink} {...rest}>
      {textMarkup}
    </A>
  ) : (
    textMarkup
  )

  return <li className={styles.ListItem}>{linkMarkup}</li>
}
