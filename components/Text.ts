import styled, {css} from 'styled-components';

export const textStyles = css`
  width: 100%;
  font-weight: normal;
  display: block;
  font-size: var(--ft-size-body);
`;

export const Text = styled.p`
  ${textStyles}
`;

export const largeStyles = css`
  width: 100%;
  text-indent: 0;
  font-size: var(--ft-size-large);
  margin: var(--space-05rem) 0;
`;

export const Large = styled.p`
  ${largeStyles}
`;

export const smallStyles = css`
  width: 100%;
  white-space: nowrap;
  display: flex;
  font-size: var(--ft-size-small);
`;

export const Small = styled.p`
  ${smallStyles}
`;
