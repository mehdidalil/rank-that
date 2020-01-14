import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { InfoHeader } from '../ui';
import { connect } from 'react-redux';


const ArtistHeader = (props) => {
	const artist = props.artists.find(artist => artist.id === parseInt(props.id));
	return (
		<CardActionArea component={ RouterLink } to={`/artists/${props.id}`}>
			<InfoHeader src={artist.pic} title={artist.name} grade={artist.grade} />
		</CardActionArea>
	)
}

const mapStateToProps = state => {
	return ({
		artists: state.artists
	})
};

export default connect(mapStateToProps)(ArtistHeader);