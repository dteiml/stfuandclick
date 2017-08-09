import * as React from 'react';

import styled from 'styled-components';
import { greyDarkest, blueLight, lavenderLight, lavenderDark } from '../util/colors';

import { Team } from '../models/Team';

interface Props {
	currentRanking: Team[],
	top: number
}

export class Table extends React.Component<Props> {
	findTeam = (ranking: Team[], teamName: string) => {
		for (let i = 0; i < ranking.length; i++) {
			if (ranking[i].team === teamName) {
				return i;
			}
		}
		return null;
	}
	renderRanking = () => {
		const teamName = location.pathname.substr(1);
		const { currentRanking, 
					top } = this.props;
		let myRanking: object[] = [];
		if (teamName === '') {
			currentRanking.forEach((team: Team, i: number) => {
				if (i < top) {
					myRanking.push(
						<Row>
							<E1>{team.order}</E1>
							<E2>{team.team}</E2>
							<E3>{team.clicks}</E3> 
						</Row>				
					);
				}
			})
		}
		else {
			const length = currentRanking.length;

			let index = this.findTeam(currentRanking, teamName);

			currentRanking.forEach((team: Team, i: number) => {
				if (team.team === teamName) {
					myRanking.push(
						<RowMyTeam>
							<E1>{team.order}</E1>
							<E2>{team.team}</E2>
							<E3>{team.clicks}</E3> 
						</RowMyTeam>				
					)
				}

				// make sure table displays correct rows
				else if ((index! < top - 4 && i < top)
				 || (index! > length - 4 && i > length - top - 1)
				 || (i > index! - 4 && i < index! + 4)) {
					myRanking.push(
						<Row>
							<E1>{team.order}</E1>
							<E2>{team.team}</E2>
							<E3>{team.clicks}</E3> 
						</Row>				
					)
				}
			})

			if (index === null) {
				myRanking.push(
					<RowMyTeam>
						<E1>{length + 1}</E1>
						<E2>{teamName}</E2>
						<E3>0</E3> 
					</RowMyTeam>	
				)
			}
		} 

		return myRanking;
	}
	render() {
		return (
			<div>
				<MyTable cellSpacing="0" cellPadding="0">
						<Head>
							<tr>
								<H1></H1>
								<H2>Team</H2>
								<H3>Clicks</H3>
							</tr>
						</Head>
						<tbody>
							{this.renderRanking()}	
						</tbody>
				</MyTable>
			</div>
		)
	}
}

const MyTable = styled.table`
	width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Head = styled.thead` 
	display: table-header-group;
	font-size: 11px;
`;

const E = styled.td`
	vertical-align: center;
`;

const E1 = E.extend`
	width: 13%;
	text-align: center;
	position: relative;
	left: 3px;
`;

const E2 = E.extend`
	width: 65%;
	text-align: left;
`;

const E3 = E.extend`
	width: 20%;
	text-align: right;
	position: relative;
	right: 13px;
`;

const H1 = E1.extend`
	color: ${greyDarkest};
	padding-bottom: 5px;
`;

const H2 = E2.extend`
	color: ${greyDarkest};
	padding-bottom: 5px;
`;

const H3 = E3.extend`
	color: ${greyDarkest};
	padding-bottom: 5px;
`;

const Row = styled.tr`
	height: 30px;
	color: black;
	&:nth-of-type(odd) {
  	background-color: ${lavenderDark};
	}
	&:nth-of-type(even) {
  	background-color: ${lavenderLight};
	}
	font-size: 12px;
`;

const RowMyTeam = styled.tr`
	color: white;
	background-color: ${blueLight};
	height: 42px;
	font-size: 24px;
`;


