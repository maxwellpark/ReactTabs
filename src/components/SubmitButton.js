import React from 'react'
import Button from 'react-bootstrap/Button';

const SubmitButton = ({getData}) => {
    return(
        <Button size="lg" variant="dark" onClick={() => getData()}>Submit</Button>
    );
};

export default SubmitButton;