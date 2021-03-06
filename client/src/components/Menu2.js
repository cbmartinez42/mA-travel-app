import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
// import API from '../utils/API'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import BrowseIcon from "@material-ui/icons/FindInPage";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PeopleIcon from "@material-ui/icons/People";
import BuildIcon from "@material-ui/icons/Build";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import MenuIcon from "@material-ui/icons/Menu";
import PostAddIcon from "@material-ui/icons/PostAdd";
// import {withStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerPaper:{
    marginTop: 40,
    marginLeft:50,
  }
});

export default function TemporaryDrawer({searchBar, setSearchBar}) {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  useEffect(() => {
    console.log("Value: ", userInfo);
  }, [userInfo]);

  // const resetActivities = () => {


  // }

  //ADD STUFF
  const getIcon = (page) => {
    // switch if page === work return icon
    switch (page) {
      case "Home Page":
        return <HomeIcon />;
      // break;
      case "Admin Tasks":
        return <BuildIcon />;
      // break;
      case "Book":
        return <MailIcon />;
      // break;
      case "Browse Tours":
        return <BrowseIcon />;
      // break;
      case "Login":
        return <MailIcon />;
      // break;
      case "My Stuff":
        return <EmojiPeopleIcon />;
      // break;
      case "Operator Admin":
        return <PeopleIcon />;
      // break;
      case "Tour":
        return <MailIcon />;
      // break;
      case "Add Tours":
        return <PostAddIcon />;
      // break;
      case "Log In / Sign Up":
        return <HowToRegIcon />;
      // break;
      case "Log Out":
        return <ExitToAppIcon />;
      // break;
      default:
        return <MailIcon />;
    }
  };

  const history = useHistory();

  const setPage = (page) => {
    console.log("I'm in setPage", page);
    console.log("userinfo: ", userInfo);
    history.push(`/${page}`);
    return;
  };

  const nliPages = [
    { text: "Home Page", menuPath: "home" },
    { text: "Browse Tours", menuPath: "browse" },
    { text: "Log In / Sign Up", menuPath: "login" },
  ];

  const userPages = [
    { text: "Home Page", menuPath: "home" },
    { text: "Browse Tours", menuPath: "browse" },
    { text: "My Stuff", menuPath: "mystuff" },
    { text: "Log Out", menuPath: "login" },
  ];


  const adminPages = [
    { text: "Home Page", menuPath: "home" },
    { text: "Browse Tours", menuPath: "browse" },
    { text: "Admin Tasks", menuPath: "admin" },
    { text: "Add Tours", menuPath: "touradmin" },
    { text: "Add Operator", menuPath: "Operatoradmin" },
    { text: "Log Out", menuPath: "login" },
  ];

  if(userInfo.role === "ADMIN") {
      var Pages = adminPages;
  } else if(userInfo.role === "USER") {
      Pages = userPages;

  } else Pages = nliPages;

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
      <List>
        {Pages.map(({ text, menuPath }, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(text)}</ListItemIcon>
            <ListItemText
              primary={text}
              onClick={() => {
                setSearchBar('');
                setPage(menuPath);
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Grid container spacing={0} className="announcement">
      </Grid>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon id="hamburger" classes={{
            paper: classes.drawerPaper
          }}/>
          </Button>

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
