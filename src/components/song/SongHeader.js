import React from 'react';
import { CardHeader, Avatar, Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { green, yellow, red } from '@material-ui/core/colors';
import { Link as RouterLink } from 'react-router-dom';

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
        width: theme.spacing(7),
        height: theme.spacing(7),
        fontSize: theme.spacing(5),
    },
}
));

const SongHeader = (props) => {
	const classes = useStyles();
	return (
		<CardActionArea component={ RouterLink } to={`/songs/${props.song.id}`}>
			<CardHeader
				avatar={
					<Avatar
						aria-label="recipe"
						primary
						className={classes.large}
						src={props.album.pic}
						variant="rounded"
					/>
				}
				title={props.song.title}
				titleTypographyProps={{ component: "h6", variant: "h6" }}
				subheader={props.album.name}
				subheaderTypographyProps={{ component: "h6", variant: "subtitle1" }}
				action={
					<Avatar className={props.song.grade > 6 ? classes.gradeGood : props.song.grade > 3 ? classes.gradeMedium : classes.gradeBad}>
						{props.song.grade}
					</Avatar>
				}
			/>
		</CardActionArea>
		
	)
}

export default SongHeader;