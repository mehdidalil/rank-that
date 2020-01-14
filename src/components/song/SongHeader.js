import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { InfoHeader } from '../ui';
import { connect } from 'react-redux';

const actions = (props) => {
	props.action();
	/*if (props.scroll)
		props.scroll();*/
}

const SongHeader = (props) => {
	const song = props.songs.find(song => song.id === parseInt(props.id));
	const album = props.albums.find(album => song.albumId === album.id);
	//const artist = props.artists.find(artist => song.artistId === artist.id);
	return (
		<CardActionArea onClick={() => {actions(props)}}>
			<InfoHeader src={album.pic} title={song.title} subheader={album.name} grade={song.grade} />
		</CardActionArea>
	)
};

const mapStateToProps = state => {
	return ({
		songs: state.songs,
		albums: state.albums,
		artists: state.artists,
	})
};

export default connect(mapStateToProps)(SongHeader);