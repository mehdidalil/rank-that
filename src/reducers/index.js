import { combineReducers } from 'redux';
import SongListReducer from './SongList';

export default combineReducers({
    songs: SongListReducer,
})