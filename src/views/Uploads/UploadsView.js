import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React from 'react'
import useStyles from './css'

const UploadsView = () => {
    const classes = useStyles()
    return(
        <>
        <CssBaseline/>
        <div className = {classes.container}>
            <Typography variant = "h2"  color ="textPrimary" >Uploads</Typography>
        </div>
    </>
    )
}


export default UploadsView