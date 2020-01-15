import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Search } from '../ui';
import MenuList from './MenuList';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	}
}));

const MobileBar = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<div>
			<AppBar position="static" className={classes.route}>
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
						<MenuIcon />
					</IconButton>
					<Search />
				</Toolbar>
			</AppBar>
			<Drawer open={open} onClose={handleOpen}>
				<MenuList />
      		</Drawer>
		</div>
		
		
	);
};

export default MobileBar;