import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import SongCard from '../song/SongCard';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	gridItem: {
		display: "flex",
		justifyContent: "center",
	},
}));

const ArtistSongList = (props) => {
	const classes = useStyles();
	const songs = props.songs.filter(song => song.artistId === parseInt(props.id));
	return (
		<Grid container spacing={3}>
			{
				songs.map(song => {
					return (
						<Grid item xs={12} key={song.id} className={classes.gridItem}>
							<SongCard id={song.id} />
						</Grid>
					);
				})
			}
		</Grid>
	)
};

const mapStateToProps = state => {
	return ({
		songs: state.songs,
	})
};

export default connect(mapStateToProps)(ArtistSongList);