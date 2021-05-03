import React from "react";
import {Typography, Grid, CardHeader, Card, CardContent} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ReactStars from "react-rating-stars-component";

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
const TopRatingCard = ({destination, avgRating, totalRatings}) => {
    const classes = useStyles()
    return(
        <Card className = {classes.card}>
         <CardContent className = {classes.cardContent}>
            <Typography variant= "h5">{destination.designation}</Typography>
                <div style = {{display:'flex', flexDirection: 'row', alignItems:'center'}}>
                    <ReactStars
                        count={5}
                        edit= {false}
                        size={40}
                        isHalf={true}
                        value = {avgRating}
                        emptyIcon={<StarBorderRoundedIcon/>}
                        halfIcon={<StarHalfRoundedIcon/>}
                        fullIcon={<StarRoundedIcon/>}
                        activeColor="#FFC107"
                        />
                    <Typography variant= "h6"style = {{marginLeft: 6}}>({totalRatings})</Typography>
                </div>

            </CardContent>
        </Card>
    )
}

export default TopRatingCard