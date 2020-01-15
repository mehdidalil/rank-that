import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ArtistListView, Menu, Login, Create } from './components';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SongListView from './components/views/SongListView';

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		justifyContent: "center",
		marginTop: "3em"
	},
}));

const Routing = () => {
	const classes = useStyles();
	return (
		<BrowserRouter>
			<Menu />
			<Container className={classes.container}>
				<Route path="/artists/" component={ArtistListView} />
				<Route path="/songs/" exact component={SongListView} />
				<Route path="/login/" component={Login} />
				<Route path="/create/" component={Create} />
			</Container>
		</BrowserRouter>
	);
}

export default Routing;