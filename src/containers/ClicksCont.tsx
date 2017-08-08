import * as React from 'react';
import { connect } from 'react-redux';

import { setTeam, setString } from '../actions';
import { Clicks } from '../components/Clicks';

interface Props {
  setTeam: (name: string, decode: boolean) => void,
  setString: (bool: boolean) => void,
  clicks: number,
  myClicks: number
}

class ClicksCont extends React.Component<Props> {
  componentDidMount() {
    this.props.setString(true);

    // only call this if we navigated here from the homepage
    // (team will be set by load action if user used direct link
    const team = location.pathname.substr(1);
    if (team !== '') {
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