import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import googleImage from '../../assets/Images/gm.jpg'
import { Typography, Grid, Card, CardMedia, CardContent} from '@material-ui/core'
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
const RouteCard = () =>{
    const classes = useStyles()
    return(
            <Card className = {classes.card}>
                <CardMedia className = {classes.cardMedia} image = {googleImage}/> 
                <CardContent className = {classes.cardContent}>
                    <Typography > Aqui vai ter a informação sobre a rota</Typography>
                </CardContent>
            </Card>
    )
}

export default RouteCard