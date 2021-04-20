import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const NavItems = (props) => {
  return (
    <List>
      <ListItem button key="home">
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </List>
  );
};

export default NavItems;
