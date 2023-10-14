import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import Box from '@material-ui/core/Box';
import { ApartmentOutlined, HouseOutlined } from '@material-ui/icons';
import { BungalowOutlined, CasesOutlined, HouseSidingOutlined, HouseboatOutlined } from '@mui/icons-material';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HouseOutlined />,
        label: 'Flat',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <ApartmentOutlined />,
        label: 'Penthouse',
        route: 'database',
    },
    {
        id: 2,
        icon: <BungalowOutlined />,
        label: 'Bungalows',
        route: 'storage',
    },
    {
        id: 3,
        icon: <HouseSidingOutlined />,
        label: 'Duplex',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <CasesOutlined />,
        label: 'Offices',
        route: 'functions',
    },
    {
        id: 5,
        icon: <HouseboatOutlined/>,
        label: 'Lake House',
        route: 'machine-learning',
    },
]