import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { fade, InputBase, useMediaQuery } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useInputState } from '../hooks';
import { initInputs, submitForm } from '../account/utils';

const useStyles = makeStyles(theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		'@media(min-width: 768px)': {
			marginLeft: theme.spacing(3),
			width: 'auto',
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		'@media(min-width: 768px)': {
			width: 200,
		},
	},
}));

const Search = () => {
	const classes = useStyles();
	const inputHandler = useInputState(initInputs([{id: "search"}]));
	const handleEnterPress = (evt) => {
		if (evt.which === 13)
			submitForm(inputHandler);
	}
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				id="search"
				placeholder="Search…"
				autoComplete='off'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
					}}
				inputProps={{
					'aria-label': 'search',
					'value': inputHandler.content['search'].value,
					'onChange': inputHandler.bind.onChange,
					'onKeyPress': handleEnterPress,
				}}
			/>
		</div>
	);
}

export default Search;