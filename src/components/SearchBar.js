import React, {useState, useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'; 

const SearchBar = () => {

    const [query, setQuery] = useState(""); 

    useEffect(() => {
        console.log("Query state: ", query); 
    });

    return(
        <InputGroup size="lg" className="mb-3" onChange={e => setQuery(e.target.value)}>
            <FormControl placeholder="Enter query" />
        </InputGroup>
    );
};

export default SearchBar; 