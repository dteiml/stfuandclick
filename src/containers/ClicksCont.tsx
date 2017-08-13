import * as React from 'react';
import { connect } from 'react-redux';

import { setTeam, setString } from '../actions';
import { Clicks } from '../components/Clicks';

import { Team } from '../models/Team';

interface Props {
  setTeam: (name: string, decode: boolean) => void,
  setString: (bool: boolean) => void,
  clicks: number,
  myClicks: number,
  ranking: Team[]
}

class ClicksCont extends React.Component<Props, any> {
  componentDidMount() {
    this.props.setString(true);

    // if user navigates here from the homepage, the following code will be run
    if (this.props.ranking.length !== 0 && this.props.myClicks === -1) {
      this.props.setTeam(location.pathname.substr(1), true);
    }
  }

  // else if the user uses a direct link, the following will be called after ranking is loaded
  // will not be called otherwise (because ranking is already loaded)
  componentDidUpdate(prevProps: Props) {
    if (this.props.ranking.length !== 0 && this.props.myClicks === -1) {
      this.props.setTeam(location.pathname.substr(1), true);
    }
  }

  render() {
    return <Clicks myClicks={this.props.myClicks} clicks={this.props.clicks}/>;
	};
};

const mapStateToProps = (state: any) => {
  const myTeam = state.ranking.myTeam;
  return {
    ranking: state.ranking.ranking,
    myClicks: myTeam.myClicks,
    clicks: myTeam.clicks
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTeam: (name: string, decode: boolean) => dispatch(setTeam(name, decode)),
    setString: (bool: boolean) => dispatch(setString(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClicksCont);