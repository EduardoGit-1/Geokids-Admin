import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Link} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import PlaceIcon from '@material-ui/icons/Place';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logout from '../../context/actions/login/logout'
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
      <Link to={"/"}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Ratings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlaceIcon />
      </ListItemIcon>
      <ListItemText primary="Trackings" />
      <Link to={"/trackings"}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PublishRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Uploads" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Arquivos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button onClick = {() => logout()}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText style={{ color:'black' }} primary="Logout" />
    </ListItem>
  </div>
);