import React from 'react';
import './App.css';
import Header from './Header';
import Song from './Song';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Song id={27} title={"Stairway to Heaven"} artist={"Led Zeppelin"} />
    </div>
  );
}

export default App;