import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Box,
    Container,
    CardActions,
    Button,
} from '@material-ui/core';
import SongForm from './SongForm';
import SongMedia from './SongMedia';
import SongHeader from './SongHeader';

const useStyles = makeStyles(theme => ({
    card: {
        width: "40em",
        position: "fixed"
    },
    media: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center"
    },
    content: {
        display: "flex",
        justifyContent: "center"
    },
    songform: {
        marginTop: "10px",
        width: "90%",
    },
    action: {
        marginBottom: "1em"
    },
    button: {
        marginLeft: "auto",
    }
}));

const SongCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <SongHeader song={props.song} />
            <CardMedia className={classes.media}>
                <Container>
                    <SongMedia youtubeId={props.song.youtubeId} />
                </Container>
            </CardMedia>
            <CardContent className={classes.content}>
                <Box className={classes.songform}>
                    <SongForm />
                </Box>
            </CardContent>
            <CardActions className={classes.action}>
			<Button className={classes.button} variant="contained" color="primary" onClick={props.onClick}>
                Vote
            </Button>
		</CardActions>
        </Card>
    );
};

export default SongCard;