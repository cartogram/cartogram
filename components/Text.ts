import styled, {css} from 'styled-components';

export const textStyles = css`
  width: 100%;
  font-weight: normal;
  display: block;
  font-size: var(--ft-size-small);
`;

export const Text = styled.p`
  ${textStyles}
`;

export const mediumStyles = css`
  width: 100%;
  text-indent: 0;
  font-size: var(--ft-size-medium);
  margin: var(--space-05rem) 0;
`;

export const Medium = styled.p`
  ${mediumStyles}
`;

export const smallStyles = css`
  width: 100%;
  font-size: var(--ft-size-xxsmall);
`;

export const Small = styled.p`
  ${smallStyles}
`;
