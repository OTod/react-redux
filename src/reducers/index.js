import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Memory Remains', duration: '5:43' },
        { title: 'Mama Said', duration: '5:23' },
        { title: 'Whiskey in the jar', duration: '4:43' },
        { title: 'Saint anger', duration: '3:43' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})