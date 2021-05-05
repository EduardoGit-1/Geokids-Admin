import { Typography, CssBaseline, Grid} from '@material-ui/core'
import React, {useEffect, useReducer} from 'react'
import Logo from '../../assets/Logos/archive.svg'
import useStyles from './css'
import FileCard from '../../components/Uploads/FileCard'
import getAllUploads from '../../context/actions/uploads/getAllUploads'
import uploadReducer from '../../context/reducer/uploadReducer'
import deleteImageOrText from '../../context/actions/uploads/deleteImageOrText'
import deleteVideoOrAudio from '../../context/actions/uploads/deleteVideoOrAudio'
import updateIsActive from '../../context/actions/uploads/updateIsActive'
import TextCard from '../../components/Uploads/TextCard'

const ArchivesView = () => {
    const classes = useStyles()
    const [uploadsState, uploadDispatch] = useReducer(uploadReducer, {totalUploads: [], error: null, loading: false})
    useEffect(()=>{
        getAllUploads()(uploadDispatch)
    },[])
    const deleteTxtImage = (id) => {
        for (let i = 0; i < uploadsState.totalUploads.length; i++) {
            let uploads = uploadsState.totalUploads[i].uploads
            console.log(uploads)
            if(uploads.length > 0 ){
                let uploadIndex = uploads.findIndex(upload => upload.uploadID === id)
                if(uploadIndex != -1){
                    uploads.splice(uploadIndex, 1);
                    deleteImageOrText(id, uploadsState.totalUploads)(uploadDispatch)
                    return;
                }
            }
        }
    }
    const deleteVidAudio = (data) => {
        for (let i = 0; i < uploadsState.totalUploads.length; i++) {
            let uploads = uploadsState.totalUploads[i].uploads
            console.log(uploads)
            if(uploads.length > 0 ){
                let uploadIndex = uploads.findIndex(upload => upload.data === data)
                if(uploadIndex != -1){
                    uploads.splice(uploadIndex, 1);
                    deleteVideoOrAudio(data, uploadsState.totalUploads)(uploadDispatch)
                    return;
                }
            }
        }
    }
    const updateActive = (id, active) => {
        for(let i = 0; i < uploadsState.totalUploads.length; i++){
            let uploads = uploadsState.totalUploads[i].uploads
            if(uploads.length > 0 ){
                let newUpload = uploads.find(upload => upload.uploadID === id)
                if(newUpload !== undefined){
                    newUpload.isActive = active;
                    updateIsActive(active,id, uploadsState.totalUploads)(uploadDispatch)
                    return;
                }
            }
        }
    }
    return(
        <>
            <CssBaseline/>
            <div className = {classes.container}>
                <img src = {Logo} className={classes.logo}/>
                <Typography variant = "h2"  color ="textPrimary" >Arquivos</Typography>
            </div>
            <div>
                <Grid container spacing = {4} className = {classes.cardGridContainer}>
                    {uploadsState.totalUploads.length > 0 && uploadsState.totalUploads.map((item) => {
                        return(item.uploads.map((item2, index2) => {
                            if(!item2.isActive){
                                if(item2.type === 'text'){
                                    return(<Grid item key={index2} xs={12} sm={6} md={4} lg = {3}>
                                        <TextCard updateActive = {updateActive} deleteTxtImage = {deleteTxtImage} deleteVidAudio = {deleteVidAudio} destination = {item.destination} {...item2}/>
                                    </Grid>)
                                }else{
                                    return(      
                                        <Grid item key={index2} xs={12} sm={6} md={4} lg = {3}>
                                            <FileCard updateActive = {updateActive} deleteTxtImage = {deleteTxtImage} deleteVidAudio = {deleteVidAudio} destination = {item.destination} {...item2}/>
                                        </Grid>
                                        )
                                }
                            }
                        })
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}


export default ArchivesView