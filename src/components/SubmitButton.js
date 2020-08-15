import React from 'react'
import Button from 'react-bootstrap/Button';
// import 

const SubmitButton = ({getData}) => {
    return(
        <Button size="lg" variant="outline-primary" onClick={() => getData()}>Submit</Button>
    );
};

export default SubmitButton;