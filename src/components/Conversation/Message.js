import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../constants";
import { DocMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={1}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                    return <MediaMsg el={el} />;
                case "doc":
                    return <DocMsg el={el} />;
                case "reply":
                    return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
