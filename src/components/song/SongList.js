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

const SongList = (props) => {
	const classes = useStyles();
	const songs = props.ids ? props.songs.filter(song => props.ids.includes(song.id)) : props.songs;
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

export default connect(mapStateToProps)(SongList);