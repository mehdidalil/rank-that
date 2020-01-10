import React from 'react';
import ArtistInformation from './ArtistInformation';
import ArtistSongDisplay from './ArtistSongDisplay';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArtistDisplay = (props) => {
	const { id } = useParams();
	const songs = props.songs.filter(song => song.artist === props.artists[id].name);
	return (
		<div>
			<ArtistInformation artist={props.artists[id]}/>
			<ArtistSongDisplay songs={songs}/>
		</div>
		
	);
}

const mapStateToProps = (state) => {
	return ({
		songs: state.songs,
		artists: state.artists,
	});
}
export default connect(mapStateToProps)(ArtistDisplay);