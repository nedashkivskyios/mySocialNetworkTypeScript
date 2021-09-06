import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MessageIcon from '@material-ui/icons/Message';
import FiberNewRoundedIcon from '@material-ui/icons/FiberNewRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Social Network TypeScript
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary={'Messages'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FiberNewRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={'News'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MusicNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={'Music'} />
            </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon>
                  <SettingsApplicationsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={'Settings'} />
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

      </main>
    </div>
  );
}


export default App;
