import React from 'react';
import { connect } from 'react-redux';
import SongCard from './SongCard/';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    box: {
        width: "60%",
        display: "flex",
        justifyContent: "center"
    }
}));

const SongSession = (props) => {
    const classes = useStyles();
    let [index, changeIndex] = React.useState(0);
    const handleChangeIndex = () => {
        changeIndex(a => a + 1);
    };
    return (
            <Box className={classes.box}>
                <SongCard song={props.songs[index]} handleNextClick={handleChangeIndex}/>
            </Box>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs};
}

export default connect(mapStateToProps)(SongSession);