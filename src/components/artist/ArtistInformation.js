import React from 'react';
import { Box, Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	box: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		margin: "0 auto",
		marginBottom: "2em"
	},
	large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        fontSize: theme.spacing(5),
	},
	item: {
		textAlign: "center"
	}
}))

const ArtistInformation = (props) => {
	const classes = useStyles();
	const artist = props.artists.find(artist => artist.id === parseInt(props.id));
	return (
		<Box className={classes.box}>
			<Grid container direction="column" alignContent="center" alignItems="center" spacing={2}>
				<Grid item xs>
					<Avatar
						className={classes.large}
						aria-label="recipe"
						primary="true"
						src={artist.pic}
						component={ RouterLink }
						to={`/artists/${props.id}`}
					/>
				</Grid>
				<Grid item xs className={classes.item}>
					<Typography component="h4" variant="h4">
						{artist.name}
					</Typography>
				</Grid>
				<Grid item xs className={classes.item}>
					<Typography component="h6" variant="subtitle1">
						{artist.bio}
					</Typography>
				</Grid>
			</Grid>
		</Box>
		
		
	);
}

const mapStateToProps = (state) => {
	return ({
		artists: state.artists
	})
};

export default connect(mapStateToProps)(ArtistInformation);