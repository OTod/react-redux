import React from 'react';
import {connect} from 'react-redux';

const SongDetail =({song}) => {

    if(!song) return <div>Please, select a song.</div>
    return (
    <div>
        <h3>{song.title}</h3>
        <span>Duration: {song.duration}</span>
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);