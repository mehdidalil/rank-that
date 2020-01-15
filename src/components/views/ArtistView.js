import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ArtistInformation } from '../artist';
import { SongList } from '../song';

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
	const ids = props.songs.filter(song => song.artistId === parseInt(artistId)).map(({ id }) => id);
	return (
		<div>
			<ArtistInformation id={artistId} />
			<Container className={classes.container}>
				<SongList ids={ids} />
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