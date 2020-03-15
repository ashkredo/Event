import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/reducers';
import HomePage from './HomePage';

type PropsType = MapStateToProps;

const HomeContainer: FC<PropsType> = props => {
  return <HomePage isRegistered={props.isRegistered} />;
};

type MapStateToProps = {
  isRegistered: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  isRegistered: state.eventPage.isRegistered
});

export default connect(mapStateToProps)(HomeContainer);
