import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ArtistListView, Menu } from './components';
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
			<Menu />
			<Container className={classes.container}>
				<Route path="/artists/" component={ArtistListView} />
			</Container>
		</BrowserRouter>
	);
}

export default Routing;