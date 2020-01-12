import React from 'react';
import { Card, Grid } from '@material-ui/core';
import SongDisplay from '../song/SongDisplay';

const ArtistSongList = (props) => {
	return (
		<Grid container spacing={3}>
			{
				props.songs.map(s => {
					const album = props.albums.filter(a => a.id === s.albumId)[0];
					return (
						<Grid item xs={12} sm={6}>
							<Card>
								<SongDisplay header song={s} album={album}/>
							</Card>
						</Grid>
					);
				})
			}
		</Grid>
	)
}

export default ArtistSongList;