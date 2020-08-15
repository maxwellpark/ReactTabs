import React from 'react'
import Button from 'react-bootstrap/Button';
// import 

const SubmitButton = ({address, getContent}) => {
    return(
        <Button size="lg" variant="outline-primary" block onClick={getContent()}>Submit</Button>
    );

};

export default SubmitButton;