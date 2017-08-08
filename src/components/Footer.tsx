import * as React from 'react';

import { Text } from './Header';

export const Footer = () => (
	<MyText>If you don't like this page, it's <a href='https://www.applifting.cz/'>Applifting's</a> fault.</MyText>
);

const MyText = Text.extend`
	margin-top: 35px;
	margin-bottom: 20px;
`;