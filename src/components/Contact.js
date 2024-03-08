import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import {
  DotsThreeVertical,
  FileText,
  ImageSquare,
  LinkSimpleHorizontal,
  Prohibit,
  Trash,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/app";
import group from "../assets/Images/group.jpg";
import building1 from "../assets/Images/building1.jpeg";
import building2 from "../assets/Images/building2.jpeg";
import building3 from "../assets/Images/building3.jpeg";
import building4 from "../assets/Images/building4.jpeg";
import { Link } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: 320,
        maxHeight: "100vh",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        sx={{
          height: "100%",
          // position: "relative",
          flexGrow: 1,
          // overflow: "scroll",
        }}
      >
        <Stack
          alignItems="center"
          pt={1}
          pb={1}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Avatar src={group} alt={"group"} sx={{ height: 52, width: 52 }} />
          <Stack alignItems="center">
            <Typography
              sx={{ fontSize: "bold", fontWeight: 700, color: "#000" }}
            >
              College group
            </Typography>
            <Typography sx={{ color: "#595959", fontSize: "12px" }}>
              @collegefriends
            </Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <X />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          alignItems={"center"}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            value={1}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#ff731d",
              },
            }}
          >
            <Tab
              label={<span style={{ color: "#595959" }}>Participants</span>}
            />
            <Tab label={<span style={{ color: "#000" }}>Shared files</span>} />
          </Tabs>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          pl={2}
          pt={0.5}
          pb={0.5}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ color: "#000" }}
          >
            <ImageSquare weight="fill" />
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: 22 / 14,
                fontSize: 14,
              }}
            >
              Shared Media
            </Typography>
          </Stack>
          <IconButton>
            <DotsThreeVertical weight="bold" />
          </IconButton>
        </Stack>
        <Grid container rowSpacing={2} columnSpacing={2} pl={2} pr={2}>
          {[building1, building2, building3, building4].map((img) => (
            <Grid item xs={6}>
              <img
                src={img}
                alt={faker.internet.userName()}
                style={{
                  borderRadius: "10px",
                  height: "84.9px",
                  width: "127.6px",
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          p={2}
          sx={{ color: "#000" }}
        >
          <FileText weight="duotone" />
          <Typography  sx={{
                fontWeight: 700,
                lineHeight: 22 / 14,
                fontSize: 14,
              }}>Shared Files</Typography>
        </Stack>
        {[1, 2].map((i) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            pb={1}
          >
            <Stack direction="row" spacing={0.5} pl={3.5}>
              <IconButton sx={{ background: "#f0f4fa", color: "#000" }}>
                <FileText weight="duotone" />
              </IconButton>
              <Stack spacing={0.2}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    lineHeight: 22 / 14,
                    fontSize: 14,
                    color: "#000"
                  }}
                >
                  Architechture2{i}.doc
                </Typography>
                <Typography
                  
                  sx={{ color: "#595959", lineHeight: 1.5,
                  fontSize:  11, }}
                >
                  0{5 - i}/09/2023 at 0{10 - i}:{44 - 2 * i}am
                </Typography>
              </Stack>
            </Stack>
            <IconButton>
              <DotsThreeVertical weight="bold" />
            </IconButton>
          </Stack>
        ))}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          p={2}
          sx={{ color: "#000" }}
        >
          <LinkSimpleHorizontal />
          <Typography sx={{
                fontWeight: 700,
                lineHeight: 22 / 14,
                fontSize: 14,
              }}>Shared Links</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.5} pl={3.5}>
          <IconButton sx={{ background: "#f0f4fa", color: "#000" }}>
            <LinkSimpleHorizontal />
          </IconButton>
          <Link
            style={{ textDecoration: "none", fontSize: "15px", color: "#000" }}
          >
            https://dribbble/hafsadeartisto....
          </Link>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={2} p={2} pt={3}>
          <Button
            fullWidth
            startIcon={<Prohibit />}
            variant="outlined"
            sx={{ color: "#ff731d", borderColor: "#ff731d" }}
          >
            Block
          </Button>
          <Button
            fullWidth
            startIcon={<Trash />}
            variant="outlined"
            sx={{ color: "#ff731d", borderColor: "#ff731d" }}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
