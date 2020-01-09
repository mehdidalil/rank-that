import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SongSession from './components/SongSession';

const Routing = () => {
	return (
		<BrowserRouter>
			<Route path="/songs/:id" exact>
				<SongSession />
			</Route>
		</BrowserRouter>
	);
}

export default Routing;