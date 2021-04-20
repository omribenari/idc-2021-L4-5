import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NavItems from "./NavItems";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <NavItems />
        </Drawer>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
