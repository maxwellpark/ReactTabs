import React from 'react';
import '../styles/Song.css';

const Song = ({id, title, artist}) => {
    const address = `http://www.songsterr.com/a/wa/song?id=${id}`;

    return(
        <div className="song">
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <a href={address}>Guitar Tab</a>
        </div>        
    )
}

export default Song;