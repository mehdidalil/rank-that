import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));

const NavBar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;