import { Typography, Container, CssBaseline, Grid, Card, CardMedia, CardContent} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import React from 'react'
import TrackingIcon from '../../components/Icons/TrackingIcon'
import Maps3 from "../../components/GoogleMaps/Maps3"
import { withScriptjs } from "react-google-maps";
import googleImage from '../../assets/Images/gm.jpg'
import RouteCard from '../../components/Tracking/RouteCard'

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
    }
}))
const cards = [1,2,3,4,5,6,7,8,9]
const TrackingView = () => {
    const classes = useStyles()
    const MapLoader = withScriptjs(Maps3);
    const url = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_API_KEY
    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <TrackingIcon style = {{marginBottom:9}} width= {50} height = {50}/>
                <Typography variant = "h2"  color ="textPrimary" >Trackings</Typography>
            </div>
            <div>
                <div>
                    <Grid container spacing = {4} className = {classes.cardGridContainer}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4} lg = {3}>
                                <RouteCard/>
                            </Grid>
                        ))}

                    </Grid>
                </div>
            </div>
        </>
    )
}

export default TrackingView
