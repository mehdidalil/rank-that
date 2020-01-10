import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar, ArtistDisplay, SongDisplay } from './components';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
			<NavBar />
			<Container className={classes.container}>
				<Route path="/songs/:id" exact>
					<SongDisplay />
				</Route>
				<Route path="/artists/:id" exact>
					<ArtistDisplay />
				</Route>
			</Container>
		</BrowserRouter>
	);
}

export default Routing;