import React, { useState } from "react";
import axios from "axios";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("artist");
  const [queryFeedback, setQueryFeedback] = useState("");
  const [status, setStatus] = useState("");

  const getData = async () => {
    if (query === "") {
      return;
    }

    let targetUrl;
    if (queryType === "artist") {
      // Get endpoint param from search query
      targetUrl = `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${query}`;
    } else if (queryType === "song") {
      targetUrl = `http://www.songsterr.com/a/ra/songs.json?pattern=${query}`;
    }

    // CORS proxy used for outside request
    let proxyUrl = `https://cors-anywhere.herokuapp.com/${targetUrl}`;
    const response = await axios
      .get(proxyUrl, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((error) => console.log(error));
    console.log("response info: ", response.statusText);
    setData(response.data);
    setStatus(response.statusText);
    console.log(response.data);
    console.log(response.headers);
    console.log(response.data.length);
    if (response.statusText === "OK" && response.data.length > 0) {
      setQueryFeedback(`${Object.keys(response.data).length} hits!`);
    } else {
      setQueryFeedback("Bad query, please try again.");
    }
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
        queryFeedback={queryFeedback}
        status={status}
      />
    </div>
  );
};

export default App;
