import React from 'react';
import ArtistList from '../artist/ArtistList';
import { Route } from 'react-router-dom';
import ArtistView from './ArtistView';

const ArtistListView = (props) => {
	return (
		<div>
			<Route path="/artists/" exact component={ArtistList} />
			<Route path="/artists/:artistId/" component={ArtistView} />
		</div>
		
	);
};

export default ArtistListView;