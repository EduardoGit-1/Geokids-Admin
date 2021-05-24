import { Typography, CssBaseline, Grid} from '@material-ui/core'
import FileCard from '../../components/Uploads/FileCard'
import deleteImageOrText from '../../context/actions/uploads/deleteImageOrText'
import deleteVideoOrAudio from '../../context/actions/uploads/deleteVideoOrAudio'
import updateIsActive from '../../context/actions/uploads/updateIsActive'
import React, {useEffect, useReducer} from 'react'
import Logo from '../../assets/Logos/dashboard.svg'
import useStyles from './css'
import getTopRatings from '../../context/actions/ratings/getTopRatings'
import getTopFavourites from '../../context/actions/favourites/getTopFavourites'
import topRatingsReducer from '../../context/reducer/topRatingsReducer'
import TopRatingCard from '../../components/Ratings/TopRatingCard'
import topFavouritesReducer from '../../context/reducer/topFavouritesReducer'
import FavouriteCard from '../../components/Favorites/FavouriteCard'
import getTrackings from '../../context/actions/trackings/getTrackings'
import routeReducer from '../../context/reducer/routeReducer'
import RouteCard from '../../components/Tracking/RouteCard'
import ratingsLogo from '../../assets/Logos/star.svg'
import uploadsLogo from '../../assets/Logos/upload.svg'
import trackingsLogo from '../../assets/Icons/tracking.svg'
import getAllUploads from '../../context/actions/uploads/getAllUploads'
import uploadReducer from '../../context/reducer/uploadReducer'
import TextCard from '../../components/Uploads/TextCard'


const DashBoardView = () => {
    const classes = useStyles()
    const [topRatingsState, topRatingsDispatch] = useReducer(topRatingsReducer, {topRatings: [], loading:false, error: null})
    const [topFavouritesState, topFavouritesDispatch] = useReducer(topFavouritesReducer, {topFavourites: [], loading:false, error: null})
    const [routeState, routeDispatch] = useReducer(routeReducer, {routes: [], error: null})
    const [uploadsState, uploadDispatch] = useReducer(uploadReducer, {totalUploads: [], error: null, loading: false})
    useEffect(()=>{
        getTopRatings()(topRatingsDispatch)
        getTopFavourites()(topFavouritesDispatch)
        getTrackings()(routeDispatch)
        getAllUploads()(uploadDispatch)
    },[])

    return(
        <>
        <CssBaseline/>
        <div className = {classes.container}>
            <img src = {Logo} className={classes.logo}/>
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
                        <div style = {{display: 'flex', flexDirection : 'row'}}>
                            <img src = {ratingsLogo} className={classes.miniLogo}/>
                            <Typography  variant = "h4" gutterBottom>Melhores Ratings</Typography>
                        </div>
                    </Grid>
                    {topRatingsState.topRatings.length > 0 && topRatingsState.topRatings.map((item, index) => (
                            <Grid item key={index}>
                                <TopRatingCard {...item}/>
                            </Grid>
                    ))}
                </Grid>
                <Grid container spacing = {3} xs = {12} sm = {6} md = {6} lg = {3} direction = "column" className = {classes.infoGrid}>
                    <Grid item>
                        <div style = {{display: 'flex', flexDirection : 'row'}}>
                            <img src = {uploadsLogo} className={classes.miniLogo}/>
                            <Typography  variant = "h4" gutterBottom>Uploads recentes</Typography>
                        </div>
                    </Grid>
                        {uploadsState.totalUploads.length > 0 && uploadsState.totalUploads.slice(0,3).map((item) => {
                            return(item.uploads.map((item2, index2) => {
                                if(item2.isActive){
                                    console.log(item2)
                                    if(item2.type === 'text'){
                                        return(<Grid item key={index2}>
                                            <TextCard {...item2} {...item} isDashboard = {true} />
                                        </Grid>)
                                    }else{
                                        return(      
                                            <Grid item key={index2} >
                                                <FileCard  {...item2}  {...item} isDashboard = {true}/>
                                            </Grid>
                                            )
                                    }
                    
                                }
                            })
                            )
                        })}

                </Grid>
                <Grid container spacing = {3} xs = {12} sm = {6} md = {6} lg = {3} direction = "column" className = {classes.infoGrid}>
                    <Grid item>
                        <div style = {{display: 'flex', flexDirection : 'row'}}>
                            <img src = {trackingsLogo} className={classes.miniLogo}/>
                            <Typography  variant = "h4" gutterBottom>Trackings recentes</Typography>
                        </div>
                    </Grid>
                    {routeState.routes.length > 0 && routeState.routes.slice(0,4).map((item, id) => (
                            <Grid item key={id}>
                                <RouteCard {...item} isDashboard = {true}/>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </div>
    </>
    )
}


export default DashBoardView