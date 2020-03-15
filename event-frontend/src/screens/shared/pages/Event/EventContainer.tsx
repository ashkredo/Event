import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUserData } from 'redux/reducers/eventReducer';
import { AppStateType } from 'redux/reducers';
import EventReduxForm from './EventReduxForm';
import EventPage from './EventPage';
import { UserType } from 'types';

type EventContainerPropsType = {
  addUserData: (
    firstName: string,
    lastName: string,
    email: string,
    eventDate: Date
  ) => void;
} & MapStateToProps;

const EventContainer: FC<EventContainerPropsType> = props => {
  const submit = (data: UserType) => {
    props.addUserData(
      data.firstName,
      data.lastName,
      data.email,
      data.eventDate
    );
  };
  if (props.isRegistered) return <Redirect to="/home" />;
  return (
    <EventPage>
      <EventReduxForm onSubmit={submit} />
    </EventPage>
  );
};

type MapStateToProps = {
  isRegistered: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  isRegistered: state.eventPage.isRegistered
});

export default connect(mapStateToProps, { addUserData })(EventContainer);
