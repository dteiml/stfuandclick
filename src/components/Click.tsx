import * as React from 'react';

import styled from 'styled-components';
import { blueLight } from '../util/colors';

export const Click = () => <Button> Click! </Button> ;


const Button = styled.button`
	border-radius: 5px;
	width: 100%;
	max-width: 420px;
	height: 80px;
	color: white;
	background-color: ${blueLight};
	font-size: 22px;
	font-weight: bold;
	text-transform: uppercase;
	border: none;
	margin: 12px 16px;
	position: relative;
	right: 4px;
`;