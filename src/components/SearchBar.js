import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'; 

const SearchBar = ({getQuery}) => {
    return(
        <InputGroup size="lg" className="mb-3" onChange={e => getQuery(e.target.value)}>
            <FormControl placeholder="Enter query" />
        </InputGroup>
    );
};

export default SearchBar; 