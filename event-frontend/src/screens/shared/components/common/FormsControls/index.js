import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const FormControl = styled.div`
  .error {
    border: 2px solid red;
  }
  .error.span {
    border: none;
    color: red;
  }
`;

const FormsControls = ({
  child,
  meta: { touched, error },
  input,
  element,
  ...props
}) => {
  const hasError = touched && error;

  return (
    <FormControl>
      <div>
        <TextField className={hasError ? 'error' : ''} {...input} {...props} />
      </div>
      {hasError && <span className="error span">{error}</span>}
    </FormControl>
  );
};

export const Input = props => {
  return <FormsControls {...props} />;
};
