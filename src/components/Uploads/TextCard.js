import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import { GET_AUDIO, GET_VIDEO } from "../../context/constants/endpoints";
const useStyles = makeStyles ((theme)=> ({
    container: {
        display:'flex',
        flexDirection: "row",
        alignItems:'center',
        padding : theme.spacing(3,3,3,3),
    },
    cardGridContainer:{
        padding : "5vh 5vh 5vh 5vh"
    },
    card: {
        height: "100%",
        display: "flex",
        borderRadius: 10,
        elevation:10,
        flexDirection: "column"
    },
    cardMedia:{
        width: '100%',
        height : 200,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    txtContainer:{
        width : '99%',
        height : '85%',
        borderRadius : 10,
        borderWidth : 3,
        borderColor: 'black',
        backgroundColor: '#F5F5F5',
    },
    cardContent:{
        flexGow:1
    },
    icon:{
        fontSize : 30,
        marginRight: 4
    },
    routeContainer:{
        display: "flex",
        flexDirection: 'column'
    },
    route:{
        display : 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(0, 0, 1, 0)
    },
    detailsContainer:{
        display: "flex",
        flexDirection: 'row',
        flexGrow: 1,
    },
}))
const TextCard = ({destination, data, type, date, isActive, uploadID, deleteTxtImage, deleteVidAudio, updateActive, isDashBoard}) =>{
    const classes = useStyles()
    return(
            <Card className = {classes.card}>
                <CardContent className = {classes.cardContent}>
                    <div className = {classes.cardMedia}>
                        <div className = {classes.txtContainer}>
                            <Typography variant = "h5" gutterBottom align = 'center' style ={{paddingBottom: 5}}>Comentário </Typography>
                            <Typography style ={{paddingLeft : 10, paddingRight: 10}}>{data}</Typography>
                        </div>
                    </div>
                    <div className = {classes.routeContainer}>
                        <div className = {classes.route}>
                            <RoomIcon className = {classes.icon} style = {{color: '#95D6A4'}}/>
                            <Typography> {destination.designation}</Typography>
                        </div>
                    </div>
                </CardContent>
                {!isDashBoard &&
                    <CardActions>
                        <Button size="small" color = "primary" onClick={() => updateActive(uploadID, !isActive )}> {isActive ? "Arquivar" : "Re-ativar"} </Button>
                        <Button size="small" color = "primary" onClick = {() => deleteTxtImage(uploadID)}> Eliminar </Button>
                    </CardActions>
                }
  
            </Card>
    )
}

export default TextCard