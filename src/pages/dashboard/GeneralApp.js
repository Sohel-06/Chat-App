import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const {sideBar}=useSelector((state)=>state.app);
  return (
    <Stack direction="row" sx={{backgroundColor:"#fff"}}>
      <Chats />
      <Box
        sx={{
          height: "100vh",
          width:sideBar.open? "calc(100vw - 740px)":"calc(100vw - 418px)",
        }}
      >
        <Conversation />
      </Box>
     {sideBar.open && <Contact/> } 
    </Stack>
  );
};

export default GeneralApp;
