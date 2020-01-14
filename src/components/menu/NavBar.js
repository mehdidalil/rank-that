import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Search } from '../ui';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuRight: {
		marginRight: theme.spacing(3),
	},
	accountButtons: {
		marginLeft: "auto",
	},
}));

const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Typography component="h6" variant="h6" className={classes.menuRight}>
					rank that
				</Typography>			
				<Button color="primary" variant="contained">
					Artists
				</Button>
				<Button color="primary" variant="contained">
					Songs
				</Button>
				<Search />
				<div className={classes.accountButtons}>
					<Button color="primary" variant="contained" startIcon={<AccountCircleIcon />}>
						Connexion
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;