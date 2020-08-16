// Container for Song components

import React from "react";
import Song from "./Song";

const SongCatalogue = ({ data, status }) => {
  let i = 0;
  if (status == "OK" && data.length > 0) {
    return (
      <div className="song-catalogue">
        {Object.entries(data).map((song) => {
          i++;
          return (
            <div>
              <Song
                key={i}
                id={song[1].id}
                title={song[1].title}
                artist={song[1].artist.name}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default SongCatalogue;
