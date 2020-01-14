import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const Menu = (props) => {
	const md = useMediaQuery('(min-width: 768px)');

	if (!md) {
		return (
			<TopBar />
		);
	} else {
		return (
			<NavBar />
		);
	}
}

export default Menu;