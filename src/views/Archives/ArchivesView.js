import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React from 'react'
import useStyles from './css'

const ArchivesView = () => {
    const classes = useStyles()
    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <Typography variant = "h2"  color ="textPrimary" >Arquivos</Typography>
            </div>
        </>
    )
}


export default ArchivesView