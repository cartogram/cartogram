import styled, {css} from 'styled-components';

export const textStyles = css`
  width: 100%;
  font-weight: normal;
  display: block;
  font-size: var(--ft-size-small);

  &:first-child {
    font-size: var(--ft-size-medium);
    text-indent: 0;
    margin: var(--space-05rem) 0;
  }
`;
export const Text = styled.p`
  ${textStyles}
`;
