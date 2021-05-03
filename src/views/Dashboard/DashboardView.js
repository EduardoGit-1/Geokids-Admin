import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React, {useEffect, useReducer} from 'react'
import TrackingIcon from '../../components/Icons/TrackingIcon'
import useStyles from './css'
import getTopRatings from '../../context/actions/ratings/getTopRatings'
import getTopFavourites from '../../context/actions/favourites/getTopFavourites'
import topRatingsReducer from '../../context/reducer/topRatingsReducer'
import TopRatingCard from '../../components/Ratings/TopRatingCard'
import topFavouritesReducer from '../../context/reducer/topFavouritesReducer'
import FavouriteCard from '../../components/Favorites/FavouriteCard'


const DashBoardView = () => {
    const classes = useStyles()
    const [topRatingsState, topRatingsDispatch] = useReducer(topRatingsReducer, {topRatings: [], loading:false, error: null})
    const [topFavouritesState, topFavouritesDispatch] = useReducer(topFavouritesReducer, {topFavourites: [], loading:false, error: null})
    useEffect(()=>{
        getTopRatings()(topRatingsDispatch)
        getTopFavourites()(topFavouritesDispatch)
    },[])

    return(
        <>
        <CssBaseline/>
        <div className = {classes.container}>
            <TrackingIcon style = {{marginBottom:9}} width= {50} height = {50}/>
            <Typography variant = "h2"  color ="textPrimary" >Dashboard</Typography>
        </div>
        <div>
            <Grid container direction = 'row' spacing = {4} className = {classes.cardGridContainer}>
                {topFavouritesState.topFavourites.length > 0 && topFavouritesState.topFavourites.map((item, index) => (
                                <Grid item key={index} xs = {12} md = {6} lg = {3}>
                                    <FavouriteCard {...item}/>
                                </Grid>
                        ))}
            </Grid>
        </div>
        <div>
            <Grid container spacing = {4} direction = 'row'  className = {classes.cardGridContainer}>
                <Grid container spacing = {3} xs = {12} sm = {6} md = {6} lg = {3} direction = "column" className = {classes.infoGrid}>
                    <Grid item>
                        <Typography align = 'center' variant = "h4" gutterBottom>Melhores Ratings</Typography>
                    </Grid>
                    {topRatingsState.topRatings.length > 0 && topRatingsState.topRatings.map((item, index) => (
                            <Grid item key={index}>
                                <TopRatingCard {...item}/>
                            </Grid>
                    ))}
                </Grid>
                <Grid container spacing = {3} xs = {12} sm = {6} md = {6} lg = {3} direction = "column" className = {classes.infoGrid}>
                    <Grid item>
                        <Typography align = 'center' variant = "h4">Uploads recentes</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing = {3} xs = {12} sm = {6} md = {6} lg = {3} direction = "column" className = {classes.infoGrid}>
                    <Grid item>
                        <Typography align = 'center' variant = "h4">Trackings recentes</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default DashBoardView