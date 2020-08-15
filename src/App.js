import React, { useState } from "react";
import axios from "axios";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

const App = () => {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("artist");
  const [data, setData] = useState({});
  const [landed, setLanded] = useState(true);

  const getData = async () => {
    if (query == "") {
      return;
    }

    let targetUrl;
    if (queryType == "artist") {
      // Get endpoint param from search query
      targetUrl = `http://www.songsterr.com/a/ra/songs.json?pattern=${query}`;
    } else if (queryType == "song") {
      targetUrl = `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${query}`;
    }

    // CORS proxy used for outside request
    let proxyUrl = `https://cors-anywhere.herokuapp.com/${targetUrl}`;
    const response = await axios.get(proxyUrl, {
      headers: { "Content-Type": "application/json" },
    });
    // setData(response.data[0]);
    console.log(response.data);
    console.log("Values: ", Object.values(response.data));
    console.log("Keys: ", Object.keys(response.data));
    console.log("Name: ", response.data[0].artist.name);
    console.log(typeof response.data);
    setData(response.data);
    setLanded(false);
  };

  const getQuery = (query) => {
    // Lift state up from SearchBar
    setQuery(query);
  };

  const getQueryType = (queryType) => {
    // Lift state up from QueryRadios
    setQueryType(queryType);
  };

  return (
    <div className="App">
      <Layout
        data={data}
        getData={getData}
        getQuery={getQuery}
        getQueryType={getQueryType}
        landed={landed}
      />
    </div>
  );
};

export default App;
