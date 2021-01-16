import React from "react";
import Link from "next/link";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
    background: "var(--primary-color)",
    height: "100%",
    color: "#fff",
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: "#fff",
    fontSize: "2rem",
  },
});

export function DrawerHeader({ data }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h4" align="center">
          LOGO
        </Typography>
      </div>
      <Divider />
      <List>
        {data.map(({ name, link }, index) => (
          <ListItem key={index} style={{ textAlign: "center" }}>
            <ListItemText
              primary={
                <Link href={link}>
                  <a
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      letterSpacing: "2px",
                    }}
                  >
                    {name}
                  </a>
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ position: "absolute", right: 0 }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{
              outline: "none",
            }}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
