import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Avatar, Typography, CardContent, CardMedia, Box, Container, IconButton, CardActions, Fade, Button } from '@material-ui/core';
import { pink, green, yellow, red } from '@material-ui/core/colors';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import clsx from 'clsx';
import SongForm from './SongForm';
import SongMedia from './SongMedia';

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
        maxWidth: 500,
        marginBottom: 10
    },
    avatar: {
        backgroundColor: pink[900]
    },
    gradeGood: {
        backgroundColor: green[700]
    },
    gradeMedium: {
        backgroundColor: yellow[700]
    },
    gradeBad: {
        backgroundColor: red[700]
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        fontSize: theme.spacing(5),
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
    }
}));

const SongCard = (props) => {
    const classes = useStyles();
    return (
        <Fade in={true}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={clsx(classes.avatar, classes.large)} src={props.song.pic}/>
                    }
                    title={
                        <Typography component="h5" variant="h5">
                            {props.song.title}
                        </Typography>
                    }
                    action={
                        <Avatar className={props.song.grade > 6 ? classes.gradeGood : props.song.grade > 3 ? classes.gradeMedium : classes.gradeBad}>
                            {props.song.grade}
                        </Avatar>
                    }
                    subheader={
                        <Typography component="h6" variant="subtitle1">
                            {props.song.artist}
                        </Typography>
                    }
                />
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
                <CardActions>
                    <Button style={{marginLeft: "auto"}} onClick={props.handleNextClick} endIcon={<ArrowForwardIosIcon />}>
                        NEXT
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    );
};

export default SongCard;