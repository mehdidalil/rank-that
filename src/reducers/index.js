import { combineReducers } from 'redux';
import SongListReducer from './SongList';
import ArtistListReducer from './ArtistList';

export default combineReducers({
    songs: SongListReducer,
    artists: ArtistListReducer,
})