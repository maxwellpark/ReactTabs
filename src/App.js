import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

const App = () => { 
  // const [id, setId] = useState(null); // 0 
  let id = 27;
  let queryString = "Led Zeppelin";
  const [content, setContent] = useState({}); 

  const songUrl = `http://www.songsterr.com/a/wa/songs.json?pattern=${queryString}`;
  const generalUrl = `http://www.songsterr.com/a/ra/songs.json?pattern=${queryString}`;
  const targetUrl = generalUrl;
  const proxyUrl = `https://cors-anywhere.herokuapp.com/${targetUrl}`;
  const pageUrl = `http://www.songsterr.com/a/wa/song?id=${id}`;

  const getData = async () => {
    // Header required for CORS 
    proxyUrl = `https://cors-anywhere.herokuapp.com/${targetUrl}`;
    const response = await axios.get(proxyUrl, { headers: { 'Origin': 'http://localhost:3000/' } });
    console.log(response.data); 
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <Layout id={id} address={pageUrl} getContent={getData} />
    </div>
  );
}

export default App;