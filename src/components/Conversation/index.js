import { faker } from "@faker-js/faker";
import {
  Avatar,
  AvatarGroup,
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Image,
  LinkSimple,
  MagnifyingGlass,
  Microphone,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Message from "./Message";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";
import group from '../../assets/Images/group.jpg'
import shreya from '../../assets/Images/shreya.jpeg'
import rahul from '../../assets/Images/rahul.jpg'
import ramya from '../../assets/Images/ramya.jpg'
import { Actions } from "../../constants";

const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Your message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((el) => (
                <Tooltip placement="right" title={el.title}>
                  <Fab
                    onClick={() => {
                      setOpenActions(!openActions);
                    }}
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                    aria-label="add"
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenActions(!openActions);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <>
          
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
          <InputAdornment>
           <IconButton
           >
             <Microphone />
           </IconButton>
         </InputAdornment>
         <InputAdornment>
           <IconButton
           >
             <Image />
           </IconButton>
         </InputAdornment>
         </>
        ),
      }}
    />
  );
};
const Conversation = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const dispatch = useDispatch();
  return (
    <Stack height="100vh" width="auto">
      <Box
        p={1.5}
        sx={{
          backgroundColor:"#fff",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack
            onClick={() => {
              dispatch(ToggleSidebar());
            }}
            direction="row"
            spacing={1}
          >
            <Box>
              <Avatar
                alt={faker.name.fullName}
                src={group}
                sx={{ height: 50, width: 50,cursor:'pointer' }}
              />
            </Box>
            <Stack spacing={0.2} alignItems={'flex-start'}>
              <Typography sx={{color:'#000',fontWeight:'bold',fontSize:'16px'}}>College group</Typography>
              <AvatarGroup
                sx={{
                 
                  "& .MuiAvatarGroup-avatar":{
                    border:'none'
                  }
                }}
              >
                <Avatar alt="Remy Sharp" src={shreya} sx={{height:26,width:26}}/>
                <Avatar alt="Travis Howard" src={rahul}  sx={{height:26,width:26}} />
                <Avatar alt="Cindy Baker" src={ramya} sx={{height:26,width:26}} />
                <Avatar sx={{height:26,width:21,paddingLeft:'5px',color:'#fff',backgroundColor:'#ff731d',fontSize:'12px'}}>6+</Avatar>
              </AvatarGroup>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton sx={{background:'#f0f4fa'}}>
              <VideoCamera />
            </IconButton>
            <IconButton sx={{background:'#f0f4fa'}}>
              <Phone />
            </IconButton>
            <IconButton sx={{background:'#f0f4fa'}}>
              <MagnifyingGlass />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" ,"&::-webkit-scrollbar": {
            display: "none",
          }, }}>
        <Message />
      </Box>
      <Box
        p={2}
        sx={{
          backgroundColor:"#fff",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack sx={{ width: "100%" }}>
            <Box
              sx={{
                zIndex: 10,
                position: "fixed",
                bottom: 81,
                right: 100,
                display: openPicker ? "inline" : "none",
              }}
            >
              <Picker data={data} />
            </Box>
            <ChatInput setOpenPicker={setOpenPicker} />
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color='#ff731d' weight="fill" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
