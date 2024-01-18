import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Imgavatar from "../src/pages/image/imgavatar.jpg";
import AccordionOne from "./pages/components/accordionOne";
import Navbarpage from "./pages/components/navbarpage";
import Dashboard from "./pages/dashbord";

const drawerWidth = 175;

function App(props) {
  const drawer = (
    <div>
      <div className="p-3 flex items-center">
        <img
          src={Imgavatar}
          alt="Avatar"
          style={{ width: "40px", borderRadius: "50%" }}
          className="mr-2"
        />
        <Typography variant="subtitle2" noWrap>
          Rishabh Tiwari
        </Typography>
      </div>

      <List>
        <ListItem disablePadding>
          <AccordionOne />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Navbarpage />
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
