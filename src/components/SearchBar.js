import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({ getData, getQuery, queryFeedback }) => {
  const handleEnterKeySubmit = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };
  return (
    <>
      <InputGroup
        size="lg"
        className="mb-3"
        onChange={(e) => getQuery(e.target.value)}
        onKeyPress={(e) => handleEnterKeySubmit(e)}
      >
        <FormControl className="search-bar" placeholder="Enter query" />
      </InputGroup>
      <p className="query-feedback">{queryFeedback}</p>
    </>
  );
};

export default SearchBar;
