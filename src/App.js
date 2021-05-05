import './App.css';
import Routes from './components/SideBar/Routes'
import useToken from './context/actions/login/useToken';
import LoginView from "./views/Login/LoginView";
import Maps from "./components/GoogleMaps/Maps"
import Maps2 from "./components/GoogleMaps/Maps2"
import Maps3 from "./components/GoogleMaps/Maps3"
import { withScriptjs } from "react-google-maps";
function App() {
  // return(
  //   <Maps/>
  // )
  const { token, setToken, setUserData} = useToken();


  if(!token) return <LoginView setUserData={setUserData} />
  
  return <Routes/>

  // const MapLoader = withScriptjs(Maps3);
  // const url = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_API_KEY
  // return (
  //   <MapLoader
  //     googleMapURL={url}
  //     loadingElement={<div style={{ height: `100%` }} />}
  //   />)
  //return <Maps/>
}

export default App;
