import React from 'react';
import { Box, Card, CardHeader, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	box: {
		display: "flex",
		justifyContent: "center"
	},
	large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        fontSize: theme.spacing(5),
    },
}))

const ArtistInformation = (props) => {
	const classes = useStyles();
	return (
		<Box className={classes.box}>
			<Avatar
				className={classes.large}
				aria-label="recipe"
				primary
				src={props.artist.pic}
			/>
			<Typography component="h5" variant="h5">
				{}
			</Typography>
		</Box>
		
	);
}

export default ArtistInformation;