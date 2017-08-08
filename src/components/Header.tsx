import * as React from 'react';

import styled from 'styled-components';
import { greyDark } from '../util/colors';

export const Header = () => {

	const team = decodeURIComponent(location.pathname.substr(1));
	if (!team) {
		return (
	   <Margin>
	    <Text>"It's really simple, you just need to click as fast as you can."</Text>
	    <Author>- anonymous</Author>
	  </Margin>
		)
	}
	else {
		const url = location.href.split('//')[1];
		const handleClick = (evt: any) => {
			evt.target.select();
		};
		return (
			<Div>
				<Margin>
					<H1>Clicking for team <Team>{team}</Team></H1>
				</Margin>
				<Text>Too lazy to click? Let your pals click for you: <URL value={url} onClick={handleClick}/></Text>
			</Div>
		)
	}
}

const Div = styled.div`
	margin-bottom: 15px;
`

const Margin = styled.div`
  margin: 30px 0;
`;
 
export const Text = styled.p` 
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

const Author = Text.extend`
  margin-top: 5px;
  position: relative;
  left: 80px;
`;

const H1 = styled.h1`
	font: 35px Roboto, sans-serif;
`;

const Team = styled.span`
	font-weight: bold;
	white-space: pre;
`;

const URL = styled.input`
	background-color: white;
  border: 1px solid ${greyDark};
  border-radius: 6px;
  font-family: Roboto, sans-serif;
  font-style: italic;
  font-size: 12px;
  padding: 3px 8px;
  margin: 0 5px;
  line-height: 1.6;
  width: 150px;
`;