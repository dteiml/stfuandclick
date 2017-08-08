import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { load, setTeam, setString, changeLocal, incrementGlobal } from '../actions';
import { Layout } from '../components/Layout';

import { Team } from '../models/Team';

interface Props {
  string: string,
  loading: boolean,
  loadingFailed: boolean,
  currentRanking: Team[],
  fetchRanking: (url: string, team: string) => void,
  changeLocal: (int: number) => void,
  incrementGlobal: () => void,
  setString: (bool: boolean) => void
}

class App extends React.Component<Props> {

  componentDidMount() {
    //read off team from url: if we are on the homepage, we would pass an empty string, which doens't break
    const team = location.pathname.substr(1);
    this.props.fetchRanking('https://klikuj.herokuapp.com/api/v1/leaderboard', team);
  };

  handleClick = () => {
    const team = location.pathname.substr(1);
    const { string, 
            changeLocal, 
            incrementGlobal, 
            setString } = this.props;

    if (string) {
      changeLocal(1);
      const ops = {
        method: 'POST',
        url: 'https://klikuj.herokuapp.com/api/v1/klik',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          team,
          session: string
        },
        json: true
      };
      axios(ops)
        .then(response => incrementGlobal())
        .catch((err) => {
          return;
        });
    } else {
      setString(true);
    }
  };
  render() {
    const { loading, 
            loadingFailed,
            currentRanking } = this.props;
    if (loadingFailed === true) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (loading) {
        return <p>Loading…</p>;
    }
    return (
      <Layout 
        currentRanking={currentRanking}
        handleClick={this.handleClick}/>
    );
  };
};

const mapStateToProps = (state: any) => {
  return {
    currentRanking: state.ranking.ranking,
    loadingFailed: state.loadingFailed,
    loading: state.loading,
    string: state.setString
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRanking: (url: string, name: string) => dispatch(load(url, name)),
    setTeam: (name: string, bool: boolean) => dispatch(setTeam(name, bool)),
    setString: (bool: boolean) => dispatch(setString(bool)),
    changeLocal: (int: number) => dispatch(changeLocal(int)),
    incrementGlobal: () => dispatch(incrementGlobal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);