import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Row,Col} from 'react-bootstrap'
import {Button, Icon,Label,Image} from 'semantic-ui-react'
import Table from './table.js';
import avatar from '../image/avatar.jpg'
import { makeStyles } from "@material-ui/core/styles";
import { DescriptionOutlined, LocalMallOutlined, PetsOutlined, SaveOutlined, VerifiedOutlined } from '@mui/icons-material';

const drawerWidth = 240;
const useStyles = makeStyles({
  paper: {
    background: "black",
    color:'white'
  }
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{backgroundColor:'black'}} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <div class='col-8'>
          <div class="input-group">
          <input type="text" class="form-control" style={{fontFamily:'FontAwesome',color:'white',border:'none',backgroundColor:'#2D2A3E'}} placeholder="&#xF002; Search Name,Gender,etc." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        </div>
        
        <Label style={{backgroundColor:'black',color:'white',marginLeft:'auto'}}>
      <Image avatar spaced='right' src={avatar} />
    </Label>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          classes={{paper: classes.paper}}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:'white'}} /> : <ChevronRightIcon style={{color:'white'}} />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button >
              <ListItemIcon style={{color:'gray'}}>
                <PetsOutlined /> 
              </ListItemIcon>
              <ListItemText primary='Lorem' />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'gray'}}>
                <LocalMallOutlined /> 
              </ListItemIcon>
              <ListItemText primary='Ipsum' />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'gray'}}>
                <SaveOutlined /> 
              </ListItemIcon>
              <ListItemText primary='Dollar' />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'gray'}}>
                <DescriptionOutlined /> 
              </ListItemIcon>
              <ListItemText primary='Sit' />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'gray'}}>
                <VerifiedOutlined /> 
              </ListItemIcon>
              <ListItemText primary='Amit' />
            </ListItem>
        </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
         
        <Row>
          <Col xs='7'>
          <h6 style={{fontWeight:'bold',color:'#6d37ed'}}>
        <Icon name='columns' />Manage Columns</h6>
          </Col>
          <Col xs='5' >
          <h6 style={{fontWeight:'bold',color:'black'}}>
          82 Names Found</h6>
          </Col>
          </Row><br/>
          <Row>
          <Col xs='7'/>
          <Col xs='3' >
          <h6 style={{fontWeight:'bold',color:'red'}}>
        <Icon name='delete' />Delete</h6>
          </Col>
          <Col xs='2'>
          <h6 style={{fontWeight:'bold',color:'#6d37ed'}}>
        <Icon name='edit' />Edit</h6>
          </Col>
          </Row>
       <br/>
          <Table/>
        </Main>
      </Box>
    );
  }