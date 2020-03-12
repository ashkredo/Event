import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUserData } from 'redux/reducers/eventReducer';
import EventReduxForm from './EventReduxForm';
import EventPage from './EventPage';

const EventContainer = props => {
  const submit = data => {
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

const mapStateToProps = state => ({
  isRegistered: state.eventPage.isRegistered
});

export default connect(mapStateToProps, { addUserData })(EventContainer);
