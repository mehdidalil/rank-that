import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ArtistInformation } from '../artist';
import ArtistSongList from '../artist/ArtistSongList';

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		justifyContent: "center",
		width: "90%",
	}
}));

const ArtistView = (props) => {
	const { artistId } = useParams();
	const classes = useStyles();
	return (
		<div>
			<ArtistInformation id={artistId} />
			<Container className={classes.container}>
				<ArtistSongList id={artistId} />
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