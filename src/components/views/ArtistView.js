import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArtistInformation from '../artist/ArtistInformation';
import SongDisplay from '../song/SongDisplay';
import ArtistSongList from '../artist/ArtistSongList';

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		justifyContent: "center",
		width: "90%",
	}
}));

const ArtistView = (props) => {
	const { id } = useParams();
	const artist = props.artists.filter(artist => artist.id === parseInt(id))[0];
	const songs = props.songs.filter(song => song.artistId === artist.id);
	const classes = useStyles();
	return (
		<div>
			<ArtistInformation artist={artist}/>
			<Container className={classes.container}>
				<ArtistSongList albums={props.albums} songs={songs} />
			</Container>
		</div>
		
	);
}

const mapStateToProps = (state) => {
	return ({
		songs: state.songs,
		artists: state.artists,
		albums: state.albums,
	});
}
export default connect(mapStateToProps)(ArtistView);