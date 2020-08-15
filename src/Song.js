import React from 'react';
// import style from './songs.module.css';

const Song = ({id, title, artist}) => {
    return(
        <div>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <a href={`http://www.songsterr.com/a/wa/song?id=${id}`}>Guitar Tab</a>
        </div>        
    )
}

export default Song;