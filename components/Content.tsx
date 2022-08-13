import styled from 'styled-components';
import {respond} from 'styles/utils';

export const Content = styled.section`
  padding: ${props => `${props.theme.emSizes[6]}`};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media ${respond.md} {
    padding: ${props => `${props.theme.emSizes[10]}`};
    padding-bottom: ${props => `${props.theme.emSizes[8]}`};
  }
`;
