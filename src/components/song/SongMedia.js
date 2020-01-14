import React from 'react';
import { connect } from 'react-redux';

const SongMedia = (props) => {
	const song = props.songs.find(song => song.id === parseInt(props.id));
	return (
			<iframe
				title="video"
				width="100%"
				height="250px"
				src={`https://www.youtube.com/embed/${song.youtubeId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				>
			</iframe>
	);
}

const mapStateToProps = state => {
	return ({
		songs: state.songs,
		albums: state.albums,
		artists: state.artists,
	})
};

export default connect(mapStateToProps)(SongMedia);