import React from 'react';
import Button from "react-bootstrap/Button";
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text, onClick = () => {} }) => (
  <Button
    data-testid='button-loading'
    onClick={onClick}
    disabled={disabled}
    type='submit'
    className="align-self-end"
    
  >
    {loading ? (
      <ReactLoading
        data-testid='loading-in-button'
        type='spin'
        height={30}
        width={30}
      />
    ) : (
      text
    )}
  </Button>
);
export default ButtonLoading;