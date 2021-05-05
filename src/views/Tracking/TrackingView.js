import { Typography, Container, CssBaseline, Grid, Card, CardMedia, CardContent} from '@material-ui/core'
import React, {useReducer, useEffect, useState} from 'react'
import TrackingIcon from '../../components/Icons/TrackingIcon'
import RouteCard from '../../components/Tracking/RouteCard'
import getTrackings from '../../context/actions/trackings/getTrackings'
import routeReducer from '../../context/reducer/routeReducer'
import useStyles from './css'

const TrackingView = () => {
    const classes = useStyles()
    const [routeState, routeDispatch] = useReducer(routeReducer, {routes: [], error: null})
    useEffect(()=>{
        getTrackings()(routeDispatch)
    },[])

    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <TrackingIcon style = {{marginBottom:9}} width= {50} height = {50}/>
                <Typography variant = "h2"  color ="textPrimary" >Trackings</Typography>
            </div>
            <div>
                    <Grid container spacing = {4} className = {classes.cardGridContainer}>
                        {routeState.routes.length > 0 && routeState.routes.map((item, id) => (
                            <Grid item key={id} xs={12} sm={6} md={4} lg = {3}>
                                <RouteCard {...item} isDashboard = {false}/>
                            </Grid>
                        ))}

                    </Grid>
            </div>
        </>
    )
}

export default TrackingView
