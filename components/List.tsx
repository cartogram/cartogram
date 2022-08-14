import React from 'react';
import styled from 'styled-components';

interface ListProps {
  items: string[] | Item[];
  inline?: boolean;
}

const StyledList = styled.ul<Pick<ListProps, 'inline'>>`
  display: flex;
  width: 100%;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
  flex-wrap: wrap;
`;

export function List({items, inline}: ListProps) {
  const itemsMarkup = items.map((item, index) => {
    if (typeof item === 'string') {
      return (
        <Item key={`${item}--${index}`} item={{title: item, active: true}} />
      );
    }
    return <Item key={`${item.title}--${index}`} item={item} />;
  });

  return <StyledList inline={inline}>{itemsMarkup}</StyledList>;
}

import {Text} from './Text';
import {A} from './A';

interface StyledProps {
  active?: boolean;
}

const StyledItem = styled.li<StyledProps>`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  white-space: nowrap;
  width: 50%;
`;

const StyledIcon = styled.span<StyledProps>`
  font-size: 115%;
  position: relative;
  padding-right: 1.5em;
  position: absolute;
  top: 60%;
  left: 0;
  transform: translate(-50%, -50%);
`;

interface Item {
  slug?: string;
  title: string;
  tags?: string[];
  date?: string;
  icon?: string;
  label?: string;
  permalink?: string;
  onGoing?: boolean;
  active?: boolean;
  onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseOver?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface Props extends StyledProps {
  item: Item;
}

function Item({item: {title, permalink, ...rest}}: Props) {
  const textMarkup = <Text as="span">{title}</Text>;

  const linkMarkup = permalink ? (
    <A external href={permalink} {...rest}>
      {textMarkup}
    </A>
  ) : (
    textMarkup
  );

  const IconMarkup = <StyledIcon>↪</StyledIcon>;

  return (
    <StyledItem>
      {linkMarkup}
      {IconMarkup}
    </StyledItem>
  );
}
