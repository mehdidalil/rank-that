import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import NavBar from './NavBar';
import MobileBar from './MobileBar';

const Menu = (props) => {
	const theme = useTheme();
	const md = useMediaQuery('@media(min-width: 768px)');

	if (!md) {
		return (
			<MobileBar />
		);
	} else {
		return (
			<NavBar />
		);
	}
}

export default Menu;