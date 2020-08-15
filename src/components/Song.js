import React from 'react';
import '../styles/Song.css';

const Song = ({data, landed}) => {
    const address = `http://www.songsterr.com/a/wa/song?id=${data.id}`;
    console.log("Hi");
    console.log(data);

    return(
        <div className="song">
            <h2 className="title">{data.title}</h2>
            {(!landed) ? <h3 className="artist">{data.artist.nameWithoutThePrefix}</h3> : null} 
            <a className="tab-link" href={address}>Guitar Tab</a>
        </div>        
    )
}

export default Song;