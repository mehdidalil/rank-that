import { combineReducers } from 'redux';
import SongListReducer from './SongList';
import ArtistListReducer from './ArtistList';
import AlbumListReducer from './AlbumList';

export default combineReducers({
    songs: SongListReducer,
    artists: ArtistListReducer,
    albums: AlbumListReducer,
})