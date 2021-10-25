import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@material-ui/core/Drawer';
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
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

export default function MiniDrawer() {
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
      <AppBar position="fixed" style={{backgroundColor:'#07070C'}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon style={{marginLeft:7}} />
          </IconButton>
          <div class='col-9'>
          <div class="input-group">
          <input type="text" class="form-control" style={{fontFamily:'FontAwesome',color:'white',border:'none',backgroundColor:'#2D2A3E'}} placeholder="&#xF002; Search Name,Gender,etc." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        </div>
        <Button style={{backgroundColor:'black',color:'gray',marginLeft:'auto'}}><Icon name='bug' />Report Bug</Button>
        <Label style={{backgroundColor:'black',color:'gray'}}>Matt{" "}
      <Image avatar spaced='right' src={avatar} />
    </Label>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{paper: classes.paper}}  open={open} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:'white'}} /> : <ChevronLeftIcon style={{color:'white'}} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{marginLeft:10}}>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Row>
          <Col lg='8'>
          <Button><Icon name='group'/>Employees</Button>
        <Button><Icon name='shopping bag'/>Has 8 sales roles</Button>
        <Button><Icon name='folder'/>Is in 3 categories</Button>
        <Button><Icon name='tag'/>Sells any product</Button>
        <Button><Icon name='globe'/>Is based in sweden</Button>
        <Button style={{backgroundColor:'yellowgreen'}}>+</Button>
          </Col>
          <Col lg='1'/>
          <Col lg='1' style={{marginLeft:'auto'}}>
          <h6 style={{marginTop:12,fontWeight:'bold',color:'black'}}>Clear</h6>       
          </Col>
          <Col lg='1' >
        <h6 style={{marginTop:12,fontWeight:'bold',color:'#6d37ed'}}>Save Report</h6>
          </Col>
        </Row>    
        <br/><hr/><br/>
        <Row>
          <Col lg='6'>
          <h6 style={{fontWeight:'bold',color:'#6d37ed'}}>
        <Icon name='columns' />Manage Columns</h6>
          </Col>
          <Col lg='4' style={{marginLeft:'auto'}} >
          <h6 style={{fontWeight:'bold',color:'gray'}}>
          82 Names Found</h6>
          </Col>
          <Col lg='1' >
          <h6 style={{fontWeight:'bold',color:'red'}}>
        <Icon name='delete' />Delete</h6>
          </Col>
          <Col lg='1'>
          <h6 style={{fontWeight:'bold',color:'#6d37ed'}}>
        <Icon name='edit' />Edit</h6>
          </Col>
        </Row><br/>
        
       <Table/>
      </Box>
    </Box>
  );
}
