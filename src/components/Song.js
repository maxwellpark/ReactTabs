import React from "react";
import "../styles/Song.css";

const Song = ({ id, title, artist, landed }) => {
  return (
    <div className="song">
      {!landed ? <h2 className="title">{title}</h2> : null}
      {!landed && artist != undefined ? (
        <h3 className="artist">{artist.name}</h3>
      ) : null}
      {!landed ? (
        <a
          className="tab-link"
          target="_blank"
          href={`http://www.songsterr.com/a/wa/song?id=${id}`}
        >
          Guitar Tab
        </a>
      ) : null}
    </div>
  );
};

export default Song;
