import React from 'react';
import { ListItem, ListItemText, ListItemIcon, useTheme } from '@material-ui/core';

const MenuListItem = (props) => {
	const theme = useTheme();
	const { icon, text, ...other } = props;
	return (
		<ListItem button {...other} style={{paddingLeft: theme.spacing(4)}}>
			{(icon) ? <ListItemIcon>{icon}</ListItemIcon> : ""}	
			<ListItemText primary={text} />
		</ListItem>
	);
}

export default MenuListItem;