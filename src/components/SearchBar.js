import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'; 

const SearchBar = ({getData, getQuery}) => {
    const handleEnterKeySubmit = e => {
        console.log("Event: ", e); 
        if (e.key == "Enter") {
            getData(); 
        }
    }
    return(
        <InputGroup size="lg" className="mb-3" onChange={e => getQuery(e.target.value)} onKeyPress={e => handleEnterKeySubmit(e)}>
            <FormControl placeholder="Enter query" />
        </InputGroup>
    );
};

export default SearchBar; 