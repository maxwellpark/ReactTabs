// Container for Song components

import React from "react";
import Song from "./Song";
import Col from "react-bootstrap/Col";

const SongCatalogue = ({ data, landed }) => {
  let i = 0;
  return (
    <div className="song-catalogue">
      {Object.keys(data).map((song) => {
        return (
          <div>
            <Song
              key={i}
              id={song.id}
              title={song.title}
              artist={song.artist}
              landed={landed}
            />
          </div>
        );
        i++;
      })}
    </div>
  );
};

export default SongCatalogue;
