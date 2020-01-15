import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SongList from '../song/SongList';

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		justifyContent: "center",
		width: "90%",
	}
}));

const SongListView = (props) => {
	const classes = useStyles();
	return (
		<div>
			<Container className={classes.container}>
				<SongList />
			</Container>
		</div>
	);
}

export default (SongListView);