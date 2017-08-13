import * as React from 'react';

import styled from 'styled-components';
import { grey } from '../util/colors';

import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Body } from './Body';    
import { Banner } from './Banner';
import { Footer } from './Footer';
import { TeamInput } from './TeamInput';
import { Ribbon } from './Ribbon';
import { Table } from './Table'; 
import { Click } from './Click';
import ClicksCont from '../containers/ClicksCont';

import { Team } from '../models/Team';

interface Props {
  currentRanking: Team[],
  handleClick: (evt: any) => void
}

export const Layout = ({currentRanking, handleClick}: Props) => {
	return (
		<Div>
			<Banner/>
      <Header />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Body>
              <TeamInput/>
              <VerticalSpace />
              <Ribbon text='TOP 10 Clickers' />
              <Table currentRanking={currentRanking} top={10} />
            </Body>)} }/>
        <Route path="/:team" render={() => {
          return (
            <Body>
              <span onClick={handleClick}><Click/></span>
              <ClicksCont />
              <Table currentRanking={currentRanking} top={7}/>
            </Body>)} }/>
      </Switch>
      <Footer />
		</Div>
	)
}

const Div = styled.div`
	text-align: center;
	font-family: Roboto, sans-serif;
	height: 100%;
	background-color: ${grey};
`;

const VerticalSpace = styled.div`
  height: 50px;
`;
