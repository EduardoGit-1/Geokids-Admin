import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArchivesView from "../../views/Archives/ArchivesView";
import DashBoardView from '../../views/Dashboard/DashboardView'
import TrackingView from '../../views/Tracking/TrackingView'
import UploadsView from '../../views/Uploads/UploadsView'
import RatingsView from '../../views/Ratings/RatingsView'
import SideBar from './SideBar'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <SideBar {...props}>
                    <Switch>
                        <Route path="/" exact component={DashBoardView}/>
                        <Route path="/ratings" component={RatingsView}/>
                        <Route path="/trackings" component={TrackingView}/>
                        <Route path="/uploads" component={UploadsView}/>
                        <Route path="/archives" component={ArchivesView}/>
                    </Switch>
                </SideBar>
            )}/>
        </BrowserRouter>

    )
}
export default Routes;