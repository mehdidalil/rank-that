import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import SongDisplay from '../song/SongDisplay';

const SongView = (props) => {
	const { id } = useParams();
	const song = props.songs.filter(song => song.id === parseInt(id))[0];
	const artist = props.artists.filter(a => a.id === song.artistId)[0];
	const album = props.albums.filter(a => a.id === song.albumId)[0];

	return (
		<SongDisplay card song={song} album={album} artist={artist} />
	)
}

const mapStateToProps = (state) => {
	return ({
		songs: state.songs,
		artists: state.artists,
		albums: state.albums,
	});
}
export default connect(mapStateToProps)(SongView);