import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SongCard from './SongCard';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
}));

const SongDisplay = (props) => {
	const classes = useStyles();
	const { id } = useParams();
	return (
			<SongCard song={props.songs[id]} />
	)
};

const mapStateToProps = (state) => {
	return ({songs: state.songs});
}
export default connect(mapStateToProps)(SongDisplay);