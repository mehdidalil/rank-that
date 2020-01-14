import React from 'react';
import { Grid, Card } from '@material-ui/core';
import ArtistHeader from './ArtistHeader';
import { connect } from 'react-redux';

const ArtistList = (props) => {
	return (
		<Grid container spacing={3}>
			{
				props.artists.map(a => {
					return (
						<Grid item xs={12} sm={6} key={a.id}>
							<Card>
								<ArtistHeader id={a.id} />
							</Card>
						</Grid>
					);
				})
			}
		</Grid>
	)
};

const mapStateToProps = state => {
	return ({
		artists: state.artists
	})
};

export default connect(mapStateToProps)(ArtistList);