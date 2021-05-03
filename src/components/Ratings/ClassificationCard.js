import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import googleImage from '../../assets/Images/gm.jpg'
import { Typography, Grid, Card, CardMedia, CardContent} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
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
    },
    icon:{
        fontSize : 45,
        marginRight: 4
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
const ClassificationCard = ({destination, answers, isFavorite, stars}) =>{
    const classes = useStyles()
    const checkAnswer = (answer)=>{
        if (answer == null) return (<IndeterminateCheckBoxRoundedIcon style = {{color : '#C3C500', marginLeft : 10}}/>)
        if(answer)return (<CheckBoxRoundedIcon style = {{color : '#95D6A4', marginLeft : 10}}/>)
        return <CancelPresentationRoundedIcon style = {{color : '#F45858', marginLeft : 10}} />
    }
    return(
            <Card className = {classes.card}>
                <CardMedia className = {classes.cardMedia} image = {googleImage}/> 
                <CardContent className = {classes.cardContent}>
                    <div className = {classes.routeContainer}>
                        <div className = {classes.route}>
                            <RoomIcon className = {classes.icon} style = {{color: '#95D6A4'}}/>
                            <Typography variant ='h5'> {destination.designation}</Typography>
                        </div>
                    </div>
                    <div style = {{marginTop:10}}>
                        <Typography variant = "h5" gutterBottom> Perguntas</Typography>
                            <Grid container spacing = {1} className = {classes.detailsContainer} style = {{marginTop: 10}}>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <Typography>Brincar: </Typography>
                                    {checkAnswer(answers.isPlayfull)}
                                </Grid>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <Typography>Sol: </Typography>
                                    {checkAnswer(answers.isSunny)}
                                </Grid>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <Typography>Sombra: </Typography>
                                    {checkAnswer(answers.isSunny)}
                                </Grid>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <Typography>Perto de casa: </Typography>
                                    {checkAnswer(answers.isNear)}
                                </Grid>
                                <Grid item className = {classes.route} xs = {12} lg = {6}>
                                    <Typography>Animais: </Typography>
                                    {checkAnswer(answers.hasAnimals)}
                                </Grid>

                            </Grid>
                        </div>

                </CardContent>
            </Card>
    )
}

export default ClassificationCard