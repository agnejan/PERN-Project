import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AuthContext } from "../context/AuthContext";
import GoBackNavigation from "./GoBackNavigation";
import HomeIcon from "@mui/icons-material/Home";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function NavBar() {
  const { user } = useContext(AuthContext);

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

  const optionsLoggedIn = [
    { text: "Home", route: "", icon: <HomeIcon /> },
    { text: "Quotes", route: "/quotes", icon: <FormatQuoteIcon /> },
    { text: "My Added Quotes", route: "/myquotes", icon: <FormatQuoteIcon /> },
    { text: "My Favorites", route: "/favorites", icon: <FavoriteIcon /> },
    { text: "Profile", route: "/profile", icon: <Person2Icon /> },
    { text: "Logout", route: "/logout", icon: <LogoutIcon /> },
  ];

  const optionsNotLoggedIn = [
    { text: "Home", route: "", icon: <HomeIcon /> },
    { text: "Quotes", route: "/quotes", icon: <FormatQuoteIcon /> },
    { text: "Login", route: "/login", icon: <LoginIcon /> },
    { text: "Register", route: "/register", icon: <AppRegistrationIcon /> },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user
          ? optionsLoggedIn.map((item, index) => (
              <Link
                key={item.text}
                to={item.route}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "secondary" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))
          : optionsNotLoggedIn.map((item, index) => (
              <Link
                key={item.text}
                to={item.route}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        ;
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton>
            <GoBackNavigation />
          </IconButton>
          {user &&
          <Link to="/newquote">
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
          </Link>}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
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
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
