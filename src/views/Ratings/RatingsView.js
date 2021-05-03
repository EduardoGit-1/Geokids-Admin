import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React, {useEffect, useReducer} from 'react'
import Logo from '../../assets/Logos/star.svg'
import useStyles from './css'
import getClassifications from '../../context/actions/ratings/getClassifications'
import getTopRatings from '../../context/actions/ratings/getTopRatings'
import classificationReducer from '../../context/reducer/classificationReducer'
import topRatingsReducer from '../../context/reducer/topRatingsReducer'
import ClassificationCard from '../../components/Ratings/ClassificationCard'
import TopRatingCard from '../../components/Ratings/TopRatingCard'
const RatingsView = () => {
    const classes = useStyles()
    const [classifState, classifDispatch] = useReducer(classificationReducer, {classifications: [], loading:false, error: null})
    const [topRatingsState, topRatingsDispatch] = useReducer(topRatingsReducer, {topRatings: [], loading:false, error: null})
    useEffect(()=>{
        getClassifications()(classifDispatch)
        getTopRatings()(topRatingsDispatch)
    },[])
    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <img src = {Logo} className={classes.logo}/>
                <Typography variant = "h2"  color ="textPrimary" >Ratings</Typography>
            </div>
            <div style = {{flex : 1, flexDirection: 'column'}}>
                <Typography style = {{marginLeft: 80,}}variant = "h3"  color ="textPrimary" >Top Ratings</Typography>
                <Grid container spacing = {4} className = {classes.cardGridContainer}>
                    {topRatingsState.topRatings.length > 0 && topRatingsState.topRatings.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3} lg = {3}>
                                <TopRatingCard {...item}/>
                            </Grid>
                    ))}
                </Grid>
            </div>
            <div>
                <Grid container spacing = {4} className = {classes.cardGridContainer}>
                    {classifState.classifications.length > 0 && classifState.classifications.map((item, id) => (
                        <Grid item key={id} xs={12} sm={6} md={4} lg = {3}>
                            <ClassificationCard {...item}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}


export default RatingsView