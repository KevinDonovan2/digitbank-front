import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import {
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Box,
    List,
    styled,
    useTheme,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '../../../context/DrawerContext';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function SideBar() {
    const { open, setOpen } = useDrawer();

    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(!open)}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Box sx={{backgroundColor:'grey', height:'100%' ,color:'white'}}>
                    <List >
                        <ListItem
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <HomeIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => {
                                navigate('/account');
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PeopleIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Accounts" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => {
                                navigate('/transaction');
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PaidIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Transaction"
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => {
                                navigate('/analystic');
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <InsertChartIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Analystics"
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>

            </Drawer>
        </Box>
    );
}
