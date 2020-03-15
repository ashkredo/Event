import React, { FC } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input } from 'screens/shared/components/common/FormsControls';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { required, minLengthCreator, maxLengthCreator } from 'utils/validators';

const minLength2 = minLengthCreator(2);
const maxLength35 = maxLengthCreator(35);
const maxLength255 = maxLengthCreator(255);

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
type EventFormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
};

const Event: FC<InjectedFormProps<EventFormValuesType>> = ({
  handleSubmit,
  error
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            autoComplete="fname"
            name="firstName"
            validate={[required, minLength2, maxLength35]}
            required
            fullWidth
            label="First Name"
            autoFocus
            component={Input}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            required
            validate={[required, minLength2, maxLength35]}
            fullWidth
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            component={Input}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            required
            validate={[required, maxLength255]}
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            component={Input}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            required
            fullWidth
            validate={[required]}
            label="Event Date"
            name="eventDate"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            autoComplete="eventDate"
            component={Input}
          />
        </Grid>
      </Grid>
      {error && (
        <div style={{ padding: '5px', color: 'rosybrown' }}>{error}</div>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/home">Already registered for Event? Home</Link>
        </Grid>
      </Grid>
    </form>
  );
};

const EventReduxForm = reduxForm<EventFormValuesType>({
  form: 'event'
})(Event);

export default EventReduxForm;
