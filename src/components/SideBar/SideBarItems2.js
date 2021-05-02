import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import PlaceIcon from '@material-ui/icons/Place';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const SidebarItems = [
    {
        name: "Dashboard",
        route: '/',
        icon: <DashboardIcon/>
    },
    {
        name: "Ratings",
        route: '/ratings',
        icon: <StarBorderIcon/>
    },
    {
        name: "Trackings",
        route: '/trackings',
        icon: <PlaceIcon/>
    },
    {
        name: "Uploads",
        route: '/uploads',
        icon: <PublishRoundedIcon/>
    },
    {
        name: "Arquivos",
        route: '/archives',
        icon: <FolderOpenIcon/>
    },
];

export default SidebarItems;