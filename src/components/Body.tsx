import * as React from 'react';

import styled from 'styled-components';
import { blueLight } from '../util/colors';
import { Text } from './Header';

export const Body = ({children}: any) => {
  return (
    <Div>
      {children}
      <MyText>Want to be top? STFU and click!</MyText>
    </Div>
  );
};

export const Div = styled.div`
  background-color: white;
  border: 3px solid ${blueLight};
  border-radius: 8px;
  margin: 0 auto;
  max-width: 450px;
  text-align: center;
  box-sizing: border-box;
`; 

const MyText = Text.extend`
  margin: 20px 0;
`;

