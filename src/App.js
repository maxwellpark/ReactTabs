import React, {useState, useEffect} from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';


const App = () => { 
  const [id, setId] = useState(null); // 0 
  const [content, setContent] = useState({}); // []
  const address = `http://www.songsterr.com/a/wa/song?id=${id}`;

  const getContent = async () => {
    let response = await fetch(address);
    let content = await response.json();
    setContent(content); 
    console.log("Response content: ", content);
  };
  return (
    <div className="App">
      <Layout address={address} getContent={getContent} />
    </div>
  );
}

export default App;