import React from 'react';
import {connect} from 'react-redux';

const SongDetail =(props) => {
    console.log(props);

    if(!props.song) return <div>Please, select a song.</div>
    return (
    <div>
        <h3>{props.song.title}</h3>
        <span>Duration: {props.song.duration}</span>
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);