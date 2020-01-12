import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongHeader from './SongHeader';
import SongCard from './SongCard';

const useStyles = makeStyles(theme => ({
}));

const SongDisplay = (props) => {
	const classes = useStyles();
	if (props.card) {
		return (
			<SongCard song={props.song} album={props.album}/>
			);
		}
	else if (props.header) {
		return (
			<SongHeader song={props.song} album={props.album} />
		);
	}
};

export default SongDisplay;