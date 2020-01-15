import React, { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Box,
    Container,
    CardActions,
    Button,
    Collapse,
    Paper,
} from '@material-ui/core';
import SongForm from './SongForm';
import SongMedia from './SongMedia';
import SongHeader from './SongHeader';

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
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
    const ref = createRef();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleScroll = () => {
        const save = ref.current;
        window.setTimeout(() => {
            save.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                });
        }, 300);
    };
    return (
        <Paper elevation={6} className={classes.card}>
            <Card className={classes.card} ref={ref}>
                <SongHeader id={props.id} action={handleOpen} scroll={handleScroll} />
                <Collapse in={open} timeout="auto">
                    <CardMedia className={classes.media}>
                        <Container>
                            <SongMedia id={props.id} />
                        </Container>
                    </CardMedia>
                    <CardContent className={classes.content}>
                        <Box className={classes.songform}>
                            <SongForm id={props.id}/>
                        </Box>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={props.onClick}
                        >
                            Vote
                        </Button>
                    </CardActions>
                </Collapse>
            </Card>
        </Paper>
    );
};

export default SongCard;