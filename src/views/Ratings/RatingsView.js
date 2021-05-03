import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React, {useEffect, useReducer} from 'react'
import Logo from '../../assets/Logos/star.svg'
import useStyles from './css'
import getClassifications from '../../context/actions/ratings/getClassifications'
import classificationReducer from '../../context/reducer/classificationReducer'
import ClassificationCard from '../../components/Ratings/ClassificationCard'
const RatingsView = () => {
    const classes = useStyles()
    const [classifState, classifDispatch] = useReducer(classificationReducer, {classifications: [], loading:false, error: null})
    useEffect(()=>{
        getClassifications()(classifDispatch)
    },[])
    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <img src = {Logo} className={classes.logo}/>
                <Typography variant = "h2"  color ="textPrimary" >Ratings</Typography>
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