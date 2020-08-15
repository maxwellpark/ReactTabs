import React, { useState } from "react";
import "../styles/Query.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const QueryRadios = ({ getQueryType }) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Artist", value: "1" },
    { name: "Song", value: "2" },
  ];

  return (
    <>
      <ButtonGroup className="radio-btn" toggle>
        {radios.map((radio, key) => (
          <ToggleButton
            key={key}
            type="radio"
            variant="dark"
            name="radio"
            size="lg"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={() => getQueryType()}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default QueryRadios;
