import React from 'react';
import { CardHeader, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { green, yellow, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    gradeGood: {
        backgroundColor: green[700]
    },
    gradeMedium: {
        backgroundColor: yellow[700]
    },
    gradeBad: {
        backgroundColor: red[700]
	},
	large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        fontSize: theme.spacing(5),
    },
}
));

const SongHeader = (props) => {
	const classes = useStyles();
	return (
		<CardHeader
			avatar={
				<Avatar
					aria-label="recipe"
					primary
					className={classes.large}
					src={props.song.pic}
				/>
			}
			title={
				<Typography component="h5" variant="h5">
					{props.song.title}
				</Typography>
			}
			action={
				<Avatar className={props.song.grade > 6 ? classes.gradeGood : props.song.grade > 3 ? classes.gradeMedium : classes.gradeBad}>
					{props.song.grade}
				</Avatar>
			}
			subheader={
				<Typography component="h6" variant="subtitle1">
					{props.song.artist}
				</Typography>
			}
		/>
	)
}

export default SongHeader;