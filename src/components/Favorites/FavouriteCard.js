import React from "react";
import {Typography, Grid, CardHeader, Card, CardContent} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

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
        flexGow:1,
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    icon:{
        fontSize : 45,
        color: '#F44336'
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
const FavouriteCard = ({destination, favouriteCount}) => {
    const classes = useStyles()
    return(
        <Card className = {classes.card}>
         <CardContent className = {classes.cardContent}>
            <Typography align = 'center'  gutterBottom  style ={{marginBottom:20}} variant= "h5">{destination.designation}</Typography>
                <div style = {{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    <Typography variant= "h4"style = {{marginLeft: 6}}>{favouriteCount}</Typography>
                    <FavoriteRoundedIcon className = {classes.icon} />
                </div>
            </CardContent>
        </Card>
    )
}

export default FavouriteCard