import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import googleImage from '../../assets/Images/gm.jpg'
import { Typography, Grid, Card, CardMedia, CardContent} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import TimerIcon from '@material-ui/icons/Timer';
import TimelineIcon from '@material-ui/icons/Timeline';
import Maps from "../GoogleMaps/Maps";


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
        paddingTop: "56.25%"
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
const RouteCard = ({destination, origin, duration, distance, isDashboard}) =>{
    const classes = useStyles()
    const convertMarkers = (marker)=> {
   
        return({
            lat : marker.latitude,
            lng : marker.longitude
        })
    }
    let markers = [convertMarkers(origin), convertMarkers(destination)]

    return(
            <Card className = {classes.card}>
                {/* <CardMedia className = {classes.cardMedia} image = {googleImage}/>  */}
                {!isDashboard && <Maps markers = {markers}/> }
                <CardContent className = {classes.cardContent}>
                    <div className = {classes.routeContainer}>
                        <Typography variant = "h4" gutterBottom> Percurso</Typography>
                        <div className = {classes.route} >
                            <RoomIcon  className = {classes.icon} style = {{color: '#F45858'}}/>
                            <Typography> {origin.designation}</Typography>
                        </div>
                        <div className = {classes.route}>
                            <RoomIcon className = {classes.icon} style = {{color: '#95D6A4'}}/>
                            <Typography> {destination.designation}</Typography>
                        </div>
                    </div>
                    <div style = {{marginTop:10}}>
                        <Typography variant = "h4" gutterBottom> Detalhes</Typography>
                            <Grid container spacing = {1} className = {classes.detailsContainer} style = {{marginTop: 10}}>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <TimerIcon  className = {classes.icon} style = {{color: '#F45858'}}/>
                                    <Typography>Duração: {duration} s.</Typography>
                                </Grid>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <TimelineIcon className = {classes.icon} style = {{color: '#95D6A4'}}/>
                                    <Typography> Distância: {distance} m.</Typography>
                                </Grid>
                        </Grid>
                    </div>

                </CardContent>
            </Card>
    )
}

export default RouteCard