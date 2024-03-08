import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  DotsThreeVertical,
  DownloadSimple,
  FileText,
} from "phosphor-react";
import { Message_options } from "../../constants";

const Timeline = ({ el }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography
        sx={{ color: "#000", lineHeight: 1.5, fontSize: 12, fontWeight: 600 }}
      >
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const TextMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Stack
        alignItems="left"
        flexDirection={el.incoming ? "start" : "row-reverse"}
        direction="row"
        spacing={2}
      >
        <Avatar
          src={el.dp}
          sx={{
            height: 40,
            width: 40,
            visibility: `${el.show ? "visible" : "hidden"}`,
          }}
        />
        <Stack spacing={1}>
          {el.show && (
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: el.incoming ? "start" : "end",
                marginRight: "10px",
                color: "#000",
                fontWeight: 600,
                lineHeight: 1.5,
                fontSize: 16,
              }}
            >
              {el.name}{" "}
              <span
                style={{ marginLeft: "2px", fontSize: "9px", color: "#595959" }}
              >
                {el.time}
              </span>
            </Typography>
          )}
          <Stack direction={"row"}>
            <Box
              p={1.5}
              sx={{
                backgroundColor: el.incoming ? "#f7f5f4" : "#ff731d",
                borderRadius: 1.5,
                width: "max-content",
              }}
            >
              <Typography
                color={el.incoming ? "#000" : "#fff"}
                sx={{ lineHeight: 22 / 14, fontSize: 14 }}
              >
                {el.message}
              </Typography>
            </Box>
            <MessageOption />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const MediaMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Stack
        alignItems="left"
        flexDirection={el.incoming ? "start" : "row-reverse"}
        direction="row"
        spacing={2}
      >
        <Avatar
          src={el.dp}
          sx={{
            height: 40,
            width: 40,
            visibility: `${el.show ? "visible" : "hidden"}`,
          }}
        />
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
          <Box
            p={1.5}
            sx={{
              backgroundColor: "#F0F4FA",
              borderRadius: 1.5,
              width: "max-content",
            }}
          >
            <Stack spacing={1}>
              <img
                src={el.img}
                alt={el.message}
                style={{ maxHeight: 210, borderRadius: "10px" }}
              />
              <Typography
                sx={{ lineHeight: 22 / 14, fontSize: 14 }}
                color={el.incoming ? "#000" : "#fff"}
              >
                {el.message}
              </Typography>
            </Stack>
          </Box>
          <MessageOption />
        </Stack>
      </Stack>
    </Stack>
  );
};

const ReplyMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Stack
        alignItems="left"
        flexDirection={el.incoming ? "start" : "row-reverse"}
        direction="row"
        spacing={2}
      >
        <Avatar
          src={el.dp}
          sx={{
            height: 40,
            width: 40,
            visibility: `${el.show ? "visible" : "hidden"}`,
          }}
        />
        <Stack spacing={1}>
          {el.show && (
            <Typography
              sx={{
                fontWeight: 600,
                lineHeight: 1.5,
                fontSize: 16,
                textAlign: el.incoming ? "start" : "end",
                marginRight: "10px",
                color: "#000",
              }}
            >
              {el.name}
              <span
                style={{ marginLeft: "2px", fontSize: "9px", color: "#595959" }}
              >
                {el.time}
              </span>
            </Typography>
          )}
          <Stack direction={"row"}>
            <Box
              px={1.5}
              py={1.5}
              sx={{
                backgroundColor: el.incoming ? "#f7f5f4" : "#ff731d",
                borderRadius: 1.5,
                width: "max-content",
              }}
            >
              <Stack spacing={2}>
                <Stack
                  p={2}
                  direction="column"
                  spacing={3}
                  alignItems="center"
                  sx={{
                    backgroundColor: "#f7f5f4",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    sx={{ color: "#000", lineHeight: 22 / 14, fontSize: 14 }}
                  >
                    {el.message}
                  </Typography>
                </Stack>
                <Typography
                  color={el.incoming ? "#000" : "#fff"}
                  sx={{ lineHeight: 22 / 14, fontSize: 14 }}
                >
                  {el.reply}
                </Typography>
              </Stack>
            </Box>
            <MessageOption />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const DocMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Stack
        alignItems="left"
        flexDirection={el.incoming ? "start" : "row-reverse"}
        direction="row"
        spacing={2}
      >
        <Avatar
          src={el.dp}
          sx={{
            height: 40,
            width: 40,
            visibility: `${el.show ? "visible" : "hidden"}`,
          }}
        />
        <Stack spacing={1}>
          {el.show && (
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                lineHeight: 1.5,
                fontSize: 16,
                textAlign: el.incoming ? "start" : "end",
                marginRight: "10px",
                color: "#000",
              }}
            >
              {el.name}
              <span
                style={{ marginLeft: "2px", fontSize: "9px", color: "#595959" }}
              >
                {el.time}
              </span>
            </Typography>
          )}
          <Stack direction={"row"}>
            <Box
              px={1.5}
              py={1.5}
              sx={{
                backgroundColor: "#F0F4FA",
                borderRadius: 1.5,
                width: "max-content",
              }}
            >
              <Stack spacing={2}>
                <Stack
                  p={2}
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    color: "#000",
                  }}
                >
                  <FileText size={48} />
                  <Typography
                    sx={{ lineHeight: 1.5, fontSize: 12, fontWeight: 600 }}
                  >
                    Architecture21.doc
                  </Typography>
                  <IconButton>
                    <DownloadSimple />
                  </IconButton>
                </Stack>
                <Typography
                  sx={{ lineHeight: 22 / 14,
                  fontSize:  14}}
                  color={el.incoming ? "#000" : "#fff"}
                >
                  {el.message}
                </Typography>
              </Stack>
            </Box>
            <MessageOption />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        cursor={"pointer"}
        style={{ marginTop: "5px" }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClose}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, DocMsg };
