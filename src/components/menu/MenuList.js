import React from 'react';
import { List, ListSubheader, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuListItem from './MenuListItem';
import { Logo } from '../ui';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
	list: {
		width: 250,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	}
}));


const MenuList = () => {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem>
				<Logo small />
			</ListItem>
			<MenuListItem text="Login" icon={<AccountCircleIcon />}/>
			<MenuListItem text="Sign up" icon={<CreateIcon />}/>
			<ListSubheader>
				  Artists
			</ListSubheader>
				<MenuListItem text="All artists" />
				<MenuListItem text="Top 20" />
			<ListSubheader>
				  Songs
			</ListSubheader>
				<MenuListItem text="All songs" />
				<MenuListItem text="Top 20" />
		</List>
	);
};

export default MenuList;