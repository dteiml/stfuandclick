import * as React from 'react';

import styled from 'styled-components';
import { blueLight, blueDark } from '../util/colors';

interface Text {
	text: string
}

export const Ribbon = ({text}: Text) => {
	return (
		<RibbonWrapper>
			<MyRibbon>{text}</MyRibbon>
		</RibbonWrapper>
	)
}

const RibbonWrapper = styled.div`
	position: relative;
	z-index: 5;
	padding-bottom: 17px;
`;

const MyRibbon = styled.div`
	background: ${blueLight};
	color: white;
	display: inline-block;
	font-family: Roboto, sans-serif;
	font-weight: bold;
	font-size: 13px;
	padding: 7px 18px;
	position: relative;
	margin: 0;
	text-align: center;

  &:before, &:after {
		content: "";
		width: 27px;
		bottom: -5px;
		position: absolute;
		display: block;
		border: 14px solid ${blueDark};
		z-index: -2;  
	}
	
	&:before {
		left: -40px;
		border-right-width: 12px;
		border-left-color:transparent;
	}
	
	&:after {
		right: -40px;
		border-left-width: 12px;
		border-right-color:transparent;
	}
`;

