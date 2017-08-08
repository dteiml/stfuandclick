import * as React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { blueLight } from '../util/colors';

export const Banner = () => {
	const domain = location.hostname;

	return <Div>
					<Link to='' style={{ textDecoration: 'none' }}> <Funky>{domain}</Funky> </Link>
				</Div>
}

const Div = styled.div`
	background: ${blueLight};
	padding: 2px 0 0 1px;
`;

const Funky = styled.span`
	color: white;
	font-family: Luckiest Guy, sans-serif;
	font-size: 18px;
`;
