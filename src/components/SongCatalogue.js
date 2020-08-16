// Container for Song components

import React from "react";
import Song from "./Song";
import Col from "react-bootstrap/Col";

const SongCatalogue = ({ data, landed }) => {
  let i = 0;
  if (!landed && data != undefined) {
    console.log("SC data: ", data);
    console.log("SC name: ", data[0].artist.name);
    return (
      <div className="song-catalogue">
        {Object.entries(data).map((song) => {
          console.log("mapped song: ", song);
          console.log("song index: ", song[1].title);
          console.log("artistA: ", song[1].artist.name);
          return (
            <div>
              <Song
                key={i}
                id={song.id}
                title={song[1].title}
                artist={song[1].artist.name}
                landed={landed}
              />
            </div>
          );
          i++;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default SongCatalogue;
