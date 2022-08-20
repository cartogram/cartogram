import styled, {css} from 'styled-components';

interface TextProps {
  pad?: boolean;
}

export const textStyles = css<TextProps>`
  width: 100%;
  font-weight: normal;
  display: block;
  font-size: var(--ft-size-body);

  ${props => (props.pad ? `padding-bottom: ${props.theme.emSizes[2]};` : '')}
`;

export const Text = styled.p`
  ${textStyles}
`;

export const largeStyles = css`
  width: 100%;
  text-indent: 0;
  font-size: var(--ft-size-large);
  margin: 0 0 var(--space-05rem) 0;
`;

export const Large = styled.p`
  ${largeStyles}
`;

export const smallStyles = css`
  width: 100%;
  white-space: nowrap;
  display: flex;
  font-size: var(--ft-size-small);
  flex-wrap: wrap;
`;

export const Small = styled.p`
  ${smallStyles}
`;
