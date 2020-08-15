import React from 'react';
import '../styles/Song.css';

const Song = ({data, landed}) => {
    return(
            <div className="song">
                {(!landed) ? <h2 className="title">{data.title}</h2> : null} 
                {(!landed) ? <h3 className="artist">{data.artist.nameWithoutThePrefix}</h3> : null} 
                {(!landed && data != {}) ? 
                    <a className="tab-link" target="_blank" href={`http://www.songsterr.com/a/wa/song?id=${data.id}`}>Guitar Tab</a>
                    : null}
            </div>
    );
};

export default Song;