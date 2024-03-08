import { faker } from "@faker-js/faker";
import {
  BookmarkSimple,
  Camera,
  ChatCircleDots,
  CirclesFour,
  File,
  Gear,
  GearSix,
  Image,
  ImageSquare,
  Info,
  Paperclip,
  PencilSimpleLine,
  Phone,
  SignOut,
  Sticker,
  User,
  Users,
} from "phosphor-react";
import you from "../assets/Images/you.jpg";
import shreya from "../assets/Images/shreya.jpeg";
import ramya from "../assets/Images/ramya.jpg";
import rahul from "../assets/Images/rahul.jpg";
import group from "../assets/Images/group.jpg";
import building1 from "../assets/Images/building1.jpeg";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Logout",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <CirclesFour />,
  },
  {
    index: 1,
    icon: <ChatCircleDots />,
  },
  {
    index: 2,
    icon: <Users />,
  },
  {
    index: 3,
    icon: <Phone />,
  },
  {
    index: 4,
    icon: <BookmarkSimple />,
  },
  {
    index: 5,
    icon: <Info />,
  },
];

const Nav_Setting = [
  {
    index: 7,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: "Marina Jolly",
    msg: "  Marina is Typing..",
    time: "14:36",
    unread: 2,
    online: true,
    icon: <PencilSimpleLine />,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: "Sent a picture",
    time: "14:02",
    unread: 0,
    online: false,
    icon: <ImageSquare />,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.lorem.words(10),
    time: "13:35",
    unread: 3,
    online: true,
  },
  {
    id: 3,
    img: group,
    name: 'College group',
    msg: 'Shreya: Yes sure, here you go.',
    time: "12:53",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 6,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: "Sent an Attachment",
    time: "07:42",
    unread: 0,
    online: false,
    icon: <Paperclip />,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "11:20",
    unread: 0,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:02",
    unread: 0,
    online: false,
  },
  {
    id: 8,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    online: false,
  },
  {
    id: 9,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "06:36",
    unread: 0,
    online: false,
  },
];

const Chat_History = [
  {
    type: "divider",
    text: "Yesterday",
  },
  {
    type: "msg",
    message: "Hi 👋🏻",
    incoming: true,
    outgoing: false,
    show: true,
    name: "Shreya",
    time: "19:14 pm",
    dp: shreya,
  },
  {
    type: "msg",
    message: "How are ya ?",
    incoming: true,
    outgoing: false,
    show: false,
    name: "Shreya",
    time: "19:15 pm",
    dp: shreya,
  },
  {
    type: "msg",
    message: "Hi Shreya, Hello Everyone",
    incoming: true,
    outgoing: false,
    show: true,
    name: "Rahul",
    time: "19:18 pm",
    dp: rahul,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Shreya",
    incoming: false,
    outgoing: true,
    show: true,
    name: "You",
    time: "09:48 am",
    dp: you,
  },
  {
    type: "msg",
    message: "not bad, u ?",
    incoming: false,
    outgoing: true,
    show: false,
    name: "You",
    time: "09:48 am",
    dp: you,
  },
  {
    type: "msg",
    message: "send the photo you have taken yesterday?",
    incoming: false,
    outgoing: true,
    show: false,
    name: "You",
    time: "09:49 am",
    dp: you,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    show: true,
    name: "Shreya",
    time: "09:56 am",
    dp: shreya,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: building1,
    incoming: true,
    outgoing: false,
    name: "Shreya",
    time: "09:59 am",
    dp: shreya,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "Thank You",
    message: "Ya sure, sending you a pic",
    incoming: false,
    outgoing: true,
    show: true,
    name: "You",
    time: "10:06 am",
    dp: you,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: true,
    outgoing: false,
    show: true,
    name: "Ramya",
    time: "11:16 am",
    dp: ramya,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    show: true,
    name: "Shreya",
    time: "12:33 pm",
    dp: shreya,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];
const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  Actions,
};
