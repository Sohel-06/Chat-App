import React from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  InputBase,
  Avatar,
  Badge,
} from "@mui/material";
import { Heart, MagnifyingGlass, NotePencil } from "phosphor-react";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { ChatList } from "../../constants";
import { faker } from "@faker-js/faker";
import you from "../../assets/Images/you.jpg";
import shreya from "../../assets/Images/shreya.jpeg";
import rahul from "../../assets/Images/rahul.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#fff",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const truncateText = (string, n) => {
  return string.length > n ? `${string.slice(0, n)}...` : string;
};

const StyledChatBox = styled(Box)(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px #fff`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ img, name, msg, time, unread, online, id, icon }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedChatId = searchParams.get("id");

  let isSelected = +selectedChatId === id;

  if (!selectedChatId) {
    isSelected = false;
  }

  return (
    <StyledChatBox
      onClick={() => {
        searchParams.set("id", id);
        searchParams.set("type", "individual-chat");
        setSearchParams(searchParams);
      }}
      sx={{
        width: "auto",
        backgroundColor: isSelected ? "#fff" : "#f7f5f4",
        borderRadius: 1,
      }}
      p={2}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 700,
                lineHeight: 22 / 14,
                fontSize: 14,
              }}
            >
              {name}
            </Typography>
            <Stack direction={"row"} sx={{ color: "#595959" }} spacing={0.5}>
              {icon}
              <Typography sx={{ lineHeight: 1.5, fontSize: 12 }}>
                {truncateText(msg, 20)}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#000",
              lineHeight: 1.5,
              fontSize: 12,
            }}
            variant="caption"
          >
            {time}
          </Typography>
          <Badge
            className="unread-count"
            sx={{
              "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#ff731d",
              },
            }}
            badgeContent={unread}
          />
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor: "#f7f5f4",
      }}
    >
      <Stack pl={2} pr={2} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack direction="row" spacing={2} pt={2} alignItems={"center"}>
          <Box>
            <Avatar alt={"dp"} src={you} sx={{ height: 48, width: 48 }} />
          </Box>
          <Stack spacing={0.2}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#000",
                fontWeight: 700,
                lineHeight: 22 / 14,
                fontSize: 14,
              }}
            >
              Sohel
            </Typography>
            <Typography
              sx={{ color: "#595959", lineHeight: 1.5, fontSize: 12 }}
            >
              My Account
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          <Typography
            sx={{
              color: "#000",
              marginBottom: "6px",
              fontWeight: 700,
              lineHeight: 1.5,
              fontSize: 20,
            }}
          >
            ONLINE NOW
          </Typography>
          <Stack direction={"row"} spacing={2}>
            {[shreya, rahul, faker.image.avatar(), faker.image.avatar()].map(
              (img) => (
                <Box>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt={faker.name.fullName} src={img} />
                  </StyledBadge>
                </Box>
              )
            )}
            <Box>
              <Avatar
                alt={faker.name.fullName}
                src={require("../../assets/Images/more.png")}
              />
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={{ color: "#000", fontWeight: "bold" }}>
            Messages
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ color: "#000" }}>
            <NotePencil />
            <Heart />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack
          sx={{
            flexGrow: 1,
            overflow: "scroll",
            height: "100%",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Stack>
            {ChatList.map((el, idx) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
