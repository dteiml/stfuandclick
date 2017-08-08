import * as React from 'react';

import styled from 'styled-components';
import { Text } from './Header';
import { blueDark } from '../util/colors';

interface Props {
	clicks: number,
	myClicks: number
}

export const Clicks = ({clicks, myClicks}: Props) => {

	return (
		<Div>
			<Span>
				<Text>Your clicks:</Text>
				<Number>{myClicks}</Number>
			</Span>
			<Span>
				<Text>Team clicks:</Text>
				<Number>{clicks}</Number>
			</Span>
		</Div>
	)
}

const Div = styled.div`
	margin: 25px 0;
	display: flex;
`;

const Span = styled.span`
	flex-grow: 1;
`;

const Number = styled.div`
	font-weight: bold;
	font-size: 35px;
	color: ${blueDark};
`
