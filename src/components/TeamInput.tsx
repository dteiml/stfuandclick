import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { blueLight, greyDark } from '../util/colors';

interface State {
	team: string
}

export class TeamInput extends React.Component<{}, State> {
	state = {
		team: ''
	}

	onChange = (evt: any) => {
		this.setState({team: evt.target.value});
	}

	render() {
		const { team } = this.state;
		return (
			<Form>
				<Div>
					<SpanLong>
						<Label>Enter your team name:</Label>
						<Input 
							type="text" 
							value={team} 
							onChange={this.onChange} 
							placeholder='Your mom'/>
					</SpanLong>
					<SpanShort>
						<Link to={'/' + team}> <Button> Click! </Button> </Link>
					</SpanShort>
				</Div>
			</Form>
		)
	}
}

const Div = styled.div`
	display: flex;
	margin: 8px 12px;
`;

const Label = styled.p`  
	font-style: italic;
	text-align: left;
	font-size: 13px;
	margin-bottom: 8px;
`;

const Form = styled.form`
`;

const Input = styled.input`
  border: 1px solid ${greyDark};
  border-radius: 6px;
  display: block;
  font-size: 12px;
  font-style: italic;
  padding: 5px;
  line-height: 1.6	;
  width: 100%;

  &::placeholder {
  	color: ${greyDark};
  }
`;


const Button = styled.button`
	background: ${blueLight};
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: bold;  
	font-size: 24px;  
	padding: 12px 40px;
	text-transform: uppercase;
	position: relative;
	top: 3px;
	left: 10px;
`;

const SpanLong = styled.span`
	flex-grow: 4;
`;

const SpanShort = styled.span`
	flex-grow: 2;
`;