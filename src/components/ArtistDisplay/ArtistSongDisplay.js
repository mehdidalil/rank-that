import React from 'react';
import { Card, Grid } from '@material-ui/core';
import SongHeader from '../SongCard/SongHeader';

const ArtistSongDisplay = (props) => {
	return (
		<Grid container spacing={2}>
			{
				props.songs.map(s => {
					return (
						<Grid item xs={4}>
							<Card>
								<SongHeader song={s} />
							</Card>
						</Grid>
					);
				})
			}
		</Grid>
	)
}

export default ArtistSongDisplay;