import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Search } from '../ui';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));

const TopBar = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.route}>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Search />
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;