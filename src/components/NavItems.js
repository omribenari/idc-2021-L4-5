import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CloudIcon from "@material-ui/icons/Cloud";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const NavItems = (props) => {
  return (
    <List>
      <ListItemLink href="/" key="home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemLink>
      <ListItemLink href="/Weather" key="Weather">
        <ListItemIcon>
          <CloudIcon />
        </ListItemIcon>
        <ListItemText primary="Weather" />
      </ListItemLink>
    </List>
  );
};

export default NavItems;
