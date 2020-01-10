import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar, ArtistDisplay, SongDisplay } from './components';
import { Container } from '@material-ui/core';

const Routing = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Container style={{display: "flex", justifyContent: "center"}}>
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