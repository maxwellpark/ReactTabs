import React, {useState} from 'react';
import axios from 'axios';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

const App = () => { 
  const [query, setQuery] = useState(""); 
  const [data, setData] = useState({});
  const [landed, setLanded] = useState(true); 

  const getData = async () => {
    if (query == "") {
      return;
    }

    // Get endpoint param from search query 
    let targetUrl = `http://www.songsterr.com/a/ra/songs.json?pattern=${query}`;

    // CORS proxy used for outside request 
    let proxyUrl = `https://cors-anywhere.herokuapp.com/${targetUrl}`;
    const response = await axios.get(proxyUrl, { headers: { 'Content-Type': 'application/json' } });
    setData(response.data[0]);
    setLanded(false); 
  }

  const getQuery = (query) => {
    // Lift state up from SearchBar 
    setQuery(query);
  }


  return (
    <div className="App">
      <Layout data={data} getData={getData} getQuery={getQuery} landed={landed} />
    </div>
  );
}

export default App;