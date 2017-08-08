import * as React from 'react';

import { Text } from './Header';

interface Text {
	text: string
}

export const Footer = ({text}: Text) => (
	<MyText>{text}</MyText>
);

const MyText = Text.extend`
	margin-top: 35px;
	margin-bottom: 20px;
`;