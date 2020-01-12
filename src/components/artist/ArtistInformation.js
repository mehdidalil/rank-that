import React from 'react';
import { Box, Card, CardHeader, Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	box: {
		display: "flex",
		justifyContent: "center",
		width: "50%",
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
	return (
		<Box className={classes.box}>
			<Grid container direction="column" alignContent="center" alignItems="center" spacing={2}>
				<Grid item xs>
					<Avatar
						className={classes.large}
						aria-label="recipe"
						primary
						src={props.artist.pic}
					/>
				</Grid>
				<Grid item xs className={classes.item}>
					<Typography component="h4" variant="h4">
						{props.artist.name}
					</Typography>
				</Grid>
				<Grid item xs className={classes.item}>
					<Typography component="h6" variant="subtitle1">
						{props.artist.bio}
					</Typography>
				</Grid>
			</Grid>
		</Box>
		
		
	);
}

export default ArtistInformation;