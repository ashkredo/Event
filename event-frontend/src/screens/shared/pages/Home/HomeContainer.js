import React from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';

const HomeContainer = props => {
  return <HomePage isRegistered={props.isRegistered} />;
};

const mapStateToProps = state => ({
  isRegistered: state.eventPage.isRegistered
});

export default connect(mapStateToProps)(HomeContainer);
