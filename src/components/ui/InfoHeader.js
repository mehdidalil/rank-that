import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { CardHeader, Avatar } from "@material-ui/core";
import { green, yellow, red } from "@material-ui/core/colors";

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
}));

const InfoHeader = (props) => {
	const classes = useStyles();

	return (
		<CardHeader
			avatar={
				<Avatar
					aria-label="recipe"
					primary="true"
					className={classes.large}
					src={props.src}
					variant="rounded"
				/>
			}
			title={props.title}
			titleTypographyProps={{ component: "h6", variant: "h6" }}
			subheader={props.subheader}
			subheaderTypographyProps={{ component: "h6", variant: "subtitle1" }}
			action={
				<Avatar className={props.grade > 6 ? classes.gradeGood : props.grade > 3 ? classes.gradeMedium : classes.gradeBad}>
					{props.grade}
				</Avatar>
			}
		/>
	);
}
export default InfoHeader;