import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListItemText from "@material-ui/core/ListItemText";
import MessageIcon from "@material-ui/icons/Message";
import FiberNewRoundedIcon from "@material-ui/icons/FiberNewRounded";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import Divider from "@material-ui/core/Divider";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";

export const Navigation = () => {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText primary={'Profile'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MessageIcon/>
          </ListItemIcon>
          <ListItemText primary={'Messages'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FiberNewRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary={'News'}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MusicNoteRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary={'Music'}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsApplicationsRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary={'Settings'}/>
        </ListItem>
      </List>
    </>
  );
};
