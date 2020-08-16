import React from "react";
import "../styles/Song.css";

const Song = ({ id, title, artist }) => {
  return (
    <div className="song">
      <h2 className="title">{title}</h2>
      <h3 className="artist">{artist}</h3>

      <a
        className="tab-link"
        target="_blank"
        rel="noopener"
        href={`http://www.songsterr.com/a/wa/song?id=${id}`}
      >
        Guitar Tab
      </a>
    </div>
  );
};

export default Song;
