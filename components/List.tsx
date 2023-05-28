import React from 'react';

import styles from './List.module.css';
import {ListItem} from './ListItem';

interface ListProps {
  items: React.ComponentProps<typeof ListItem>['item'][];
  inline?: boolean;
  pad?: boolean;
}

export function List({items, pad, inline}: ListProps) {
  const itemsMarkup = items.map((item, index) => {
    return <ListItem key={`${item.title}--${index}`} item={item} />;
  });

  return <ul className={styles.List}>{itemsMarkup}</ul>;
}
