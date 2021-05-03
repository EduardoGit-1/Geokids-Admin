import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles ((theme)=> ({
    logo:{
        width: 50,
        height : 50,
        margin : "0 10px 4px 0"
    },
    container: {
        display:'flex',
        flexDirection: "row",
        alignItems:'center',
        padding : theme.spacing(3,3,3,3),
    },
    cardGridContainer:{
        padding : "5vh 5vh 5vh 5vh",
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center', 
    },
    infoGrid:{
        backgroundColor:'white',
        borderRadius: 10,
        borderWidth: 1,
        margin: 15,
        padding: 10
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
    }
}))

export default useStyles