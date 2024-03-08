import { Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { Power } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../constants";

const DashboardLayout = () => {
  const [selected, setSelected] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={"row"} sx={{
      backgroundColor: "#fff",
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      height: "100vh",
      width: 100,
    }}>
      <Box
        p={2}
        
      >
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={2}>
            <Box
            >
              <img src={Logo} alt={"Chat App Logo"} style={{ height: 64,
                width: 64,}} />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box p={1}>
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: "#fff",
                        backgroundColor: "#ff731d",
                        "&:hover": { backgroundColor: "#ff731d" },
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color: "#000",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <IconButton
              sx={{
                width: "max-content",
                color: "#000",
              }}
            >
              <Power onClick={handleClick} />
              <Menu
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                id="profile-positioned-menu"
                aria-labelledby="profile-positioned-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box p={1}>
                  <Stack spacing={1}>
                    {Profile_Menu.map((el) => (
                      <MenuItem onClick={handleClose}>
                        <Stack
                          sx={{ width: 100 }}
                          direction="row"
                          alignItems={"center"}
                          justifyContent="space-between"
                        >
                          <span>{el.title}</span>
                          {el.icon}
                        </Stack>{" "}
                      </MenuItem>
                    ))}
                  </Stack>
                </Box>
              </Menu>
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
