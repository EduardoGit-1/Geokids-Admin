import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import { GET_AUDIO, GET_VIDEO } from "../../context/constants/endpoints";
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        padding: theme.spacing(3, 3, 3, 3),
    },
    cardGridContainer: {
        padding: "5vh 5vh 5vh 5vh"
    },
    card: {
        height: "100%",
        display: "flex",
        borderRadius: 10,
        elevation: 10,
        flexDirection: "column"
    },
    cardMediaVideo: {
        height: 200,
        fill: true
    },
    cardMediaAudio: {
        display: 'flex',
        height: 135,
        marginBottom: 65,
        width: '80%',
        alignSelf: 'center',


    },
    cardMediaImage: {
        width: '100%',
        height: 200,
        objectFit: 'cover'
    },
    cardContent: {
        flexGow: 1
    },
    icon: {
        fontSize: 30,
        marginRight: 4
    },
    routeContainer: {
        display: "flex",
        flexDirection: 'column'
    },
    route: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(0, 0, 1, 0)
    },
    detailsContainer: {
        display: "flex",
        flexDirection: 'row',
        flexGrow: 1,
    },
}))
const { REACT_APP_DEV_GEOKIDS_URL } = process.env
const FileCard = ({ destination, data, type, date, isActive, uploadID, deleteTxtImage, deleteVidAudio, updateActive, isDashBoard }) => {
    console.log(data)
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            {type === 'video' ?
                <CardMedia controls className={classes.cardMediaVideo} component="video" image={REACT_APP_DEV_GEOKIDS_URL + GET_VIDEO + data} />
                : type === 'image' ?
                    <CardMedia className={classes.cardMediaImage} component="image" image={data} />
                    :
                    <CardMedia controls className={classes.cardMediaAudio} component="audio" image={REACT_APP_DEV_GEOKIDS_URL + GET_AUDIO + data} />
            }
            {/* <CardMedia className = {classes.cardMedia} src = {switchTypeData()}/>   */}
            <CardContent className={classes.cardContent}>
                <div className={classes.routeContainer}>
                    <div className={classes.route}>
                        <RoomIcon className={classes.icon} style={{ color: '#95D6A4' }} />
                        <Typography> {destination.designation}</Typography>
                    </div>
                </div>
            </CardContent>
            {!isDashBoard ?
                <CardActions>
                    <Button size="small" color="primary" onClick={() => updateActive(uploadID, !isActive)}> {isActive ? "Arquivar" : "Re-ativar"} </Button>
                    {
                        (type === 'video' || type === 'audio') ?
                            <Button size="small" color="primary" onClick={() => deleteVidAudio(data)}> Eliminar </Button>
                            :
                            <Button size="small" color="primary" onClick={() => deleteTxtImage(uploadID)}> Eliminar </Button>
                    }

                </CardActions>
                : null
            }
        </Card>
    )
}

export default FileCard